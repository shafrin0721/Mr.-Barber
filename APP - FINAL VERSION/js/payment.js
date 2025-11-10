// Load booking data and update payment page
document.addEventListener('DOMContentLoaded', function() {
  loadBookingData();
});

function loadBookingData() {
  // Get booking data from localStorage
  const bookingData = localStorage.getItem('bookingData');
  
  if (!bookingData) {
    // If no booking data, redirect back to booking page
    alert('No booking data found. Please complete your booking first.');
    window.location.href = 'book-appointment.html';
    return;
  }

  const booking = JSON.parse(bookingData);
  
  // Update barber information
  updateBarberInfo(booking.barber);
  
  // Update service details
  updateServiceDetails(booking.service);
  
  // Update date and time
  updateDateTime(booking.date, booking.time, booking.service.duration);
  
  // Update cost breakdown
  updateCostBreakdown(booking.service.price);
}

function updateBarberInfo(barber) {
  // Update barber avatar initials
  const avatar = document.querySelector('.barber-avatar-summary');
  if (avatar && barber.name) {
    const nameParts = barber.name.split(' ');
    const initials = nameParts.length >= 2 
      ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
      : nameParts[0].substring(0, 2).toUpperCase();
    avatar.textContent = initials;
  }

  // Update barber name
  const barberName = document.querySelector('.barber-summary h3');
  if (barberName) {
    barberName.textContent = barber.name;
  }

  // Update barber rating
  const ratingElement = document.querySelector('.barber-rating-summary');
  if (ratingElement && barber.rating) {
    ratingElement.innerHTML = `<span class="star">★</span> ${barber.rating.toFixed(1)} <span class="rating-text">(${barber.rating.toFixed(1)})</span>`;
  }
}

function updateServiceDetails(service) {
  // Update service name
  const serviceElement = document.querySelector('.summary-details .summary-detail-item:first-child span');
  if (serviceElement && service.name) {
    serviceElement.textContent = service.name;
  }
}

function updateDateTime(date, time, duration) {
  // Format date properly
  const dateElement = document.querySelector('.summary-details .summary-detail-item:nth-child(2) > div > div:first-child');
  if (dateElement && date.fullDate) {
    // Use the date format from booking
    dateElement.textContent = date.fullDate;
  }

  // Calculate end time
  const startTime = time;
  const [timePart, period] = startTime.split(' ');
  const [hours, minutes] = timePart.split(':');
  let startHour = parseInt(hours);
  if (period === 'PM' && startHour !== 12) startHour += 12;
  if (period === 'AM' && startHour === 12) startHour = 0;

  const startMinutes = parseInt(minutes);
  const totalStartMinutes = startHour * 60 + startMinutes;
  const totalEndMinutes = totalStartMinutes + duration;
  
  const endHour = Math.floor(totalEndMinutes / 60);
  const endMin = totalEndMinutes % 60;
  
  let endHour12 = endHour > 12 ? endHour - 12 : endHour;
  if (endHour12 === 0) endHour12 = 12;
  const endPeriod = endHour >= 12 ? 'PM' : 'AM';
  const endTime = `${endHour12.toString().padStart(2, '0')}:${endMin.toString().padStart(2, '0')} ${endPeriod}`;

  // Update time range
  const timeElement = document.querySelector('.summary-details .summary-detail-item:nth-child(2) .detail-subtext');
  if (timeElement) {
    timeElement.textContent = `${time} - ${endTime}`;
  }
}

function updateCostBreakdown(servicePrice) {
  // Calculate tax (8%)
  const taxRate = 0.08;
  const tax = servicePrice * taxRate;
  
  // Apply discount (optional - you can make this dynamic)
  const discount = 5.00;
  
  // Calculate total
  const total = servicePrice + tax - discount;

  // Update service fee
  const serviceFeeElement = document.querySelector('.cost-breakdown .cost-item:first-child span:last-child');
  if (serviceFeeElement) {
    serviceFeeElement.textContent = `$${servicePrice.toFixed(2)}`;
  }

  // Update tax
  const taxElement = document.querySelector('.cost-breakdown .cost-item:nth-child(2) span:last-child');
  if (taxElement) {
    taxElement.textContent = `$${tax.toFixed(2)}`;
  }

  // Update discount
  const discountElement = document.querySelector('.cost-breakdown .cost-item.discount span:last-child');
  if (discountElement) {
    discountElement.textContent = `-$${discount.toFixed(2)}`;
  }

  // Update total
  const totalElement = document.querySelector('.cost-total span:last-child');
  if (totalElement) {
    totalElement.textContent = `$${total.toFixed(2)}`;
  }
}

