// Booking state
let bookingState = {
  service: {
    name: 'Classic Haircut',
    price: 35,
    duration: 45
  },
  barber: {
    name: 'Mike Johnson',
    rating: 4.9
  },
  date: {
    day: 12,
    month: 'December',
    year: 2024,
    fullDate: 'December 12, 2024'
  },
  time: '02:00 PM',
  currentStep: 1
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize with default selected values
  const defaultService = document.querySelector('.service-card.selected');
  if (defaultService) {
    const serviceName = defaultService.querySelector('h3').textContent;
    const priceText = defaultService.querySelector('.service-price').textContent;
    const durationText = defaultService.querySelector('.service-duration').textContent;
    bookingState.service = {
      name: serviceName,
      price: parseInt(priceText.replace('$', '')),
      duration: parseInt(durationText.replace(' min', ''))
    };
  }

  const defaultBarber = document.querySelector('.barber-card.selected');
  if (defaultBarber) {
    const barberName = defaultBarber.querySelector('h3').textContent;
    const ratingText = defaultBarber.querySelector('.barber-rating').textContent;
    const rating = parseFloat(ratingText.replace('★ ', ''));
    bookingState.barber = {
      name: barberName,
      rating: rating
    };
  }

  const defaultDate = document.querySelector('.calendar-day.selected');
  if (defaultDate) {
    const day = parseInt(defaultDate.textContent);
    bookingState.date = {
      day: day,
      month: 'December',
      year: 2024,
      fullDate: `December ${day}, 2024`
    };
  }

  const defaultTime = document.querySelector('.time-slot.selected');
  if (defaultTime) {
    bookingState.time = defaultTime.textContent;
  }

  initializeBookingPage();
  updateBookingSummary();

  // Initialize confirm button
  const confirmBtn = document.getElementById('confirm-booking-btn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', confirmBooking);
  }
});

function initializeBookingPage() {
  // Service card selection
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      selectService(this);
    });
  });

  // Barber card selection
  const barberCards = document.querySelectorAll('.barber-card');
  barberCards.forEach(card => {
    card.addEventListener('click', function() {
      selectBarber(this);
    });
  });

  // Calendar day selection
  const calendarDays = document.querySelectorAll('.calendar-day:not(.disabled)');
  calendarDays.forEach(day => {
    day.addEventListener('click', function() {
      selectDate(this);
    });
  });

  // Time slot selection
  const timeSlots = document.querySelectorAll('.time-slot:not(.disabled)');
  timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
      selectTime(this);
    });
  });
}

function selectService(card) {
  // Remove selected class from all service cards
  document.querySelectorAll('.service-card').forEach(c => {
    c.classList.remove('selected');
  });

  // Add selected class to clicked card
  card.classList.add('selected');

  // Extract service details
  const serviceName = card.querySelector('h3').textContent;
  const priceText = card.querySelector('.service-price').textContent;
  const durationText = card.querySelector('.service-duration').textContent;

  // Update booking state
  bookingState.service = {
    name: serviceName,
    price: parseInt(priceText.replace('$', '')),
    duration: parseInt(durationText.replace(' min', ''))
  };

  // Update step 1 to completed
  updateStep(1, true);
  updateStep(2, false);

  // Update summary
  updateBookingSummary();
}

function selectBarber(card) {
  // Remove selected class from all barber cards
  document.querySelectorAll('.barber-card').forEach(c => {
    c.classList.remove('selected');
  });

  // Add selected class to clicked card
  card.classList.add('selected');

  // Extract barber details
  const barberName = card.querySelector('h3').textContent;
  const ratingText = card.querySelector('.barber-rating').textContent;
  const rating = parseFloat(ratingText.replace('★ ', ''));

  // Update booking state
  bookingState.barber = {
    name: barberName,
    rating: rating
  };

  // Update step 2 to completed
  updateStep(2, true);
  updateStep(3, false);

  // Update summary
  updateBookingSummary();
}

function selectDate(dayElement) {
  // Remove selected class from all days
  document.querySelectorAll('.calendar-day').forEach(d => {
    d.classList.remove('selected');
  });

  // Add selected class to clicked day
  dayElement.classList.add('selected');

  // Get the day number
  const day = parseInt(dayElement.textContent);
  const month = 'December'; // You can make this dynamic
  const year = 2024;

  // Update booking state
  bookingState.date = {
    day: day,
    month: month,
    year: year,
    fullDate: `${month} ${day}, ${year}`
  };

  // Update step 3 to completed
  updateStep(3, true);
  updateStep(4, false);

  // Update summary
  updateBookingSummary();
}

function selectTime(slotElement) {
  // Remove selected class from all time slots
  document.querySelectorAll('.time-slot').forEach(s => {
    s.classList.remove('selected');
  });

  // Add selected class to clicked slot
  slotElement.classList.add('selected');

  // Get the time
  const time = slotElement.textContent;

  // Update booking state
  bookingState.time = time;

  // Update step 4 to completed
  updateStep(4, true);

  // Update summary
  updateBookingSummary();
}

function updateStep(stepNumber, completed) {
  const step = document.querySelectorAll('.step')[stepNumber - 1];
  const stepLine = document.querySelectorAll('.step-line')[stepNumber - 1];

  if (completed) {
    step.classList.add('completed');
    if (stepLine) {
      stepLine.classList.add('completed');
    }
  } else {
    step.classList.remove('completed');
    if (stepLine) {
      stepLine.classList.remove('completed');
    }
  }
}

function updateBookingSummary() {
  // Update service
  const serviceValue = document.querySelector('.summary-content .summary-item:nth-child(1) .summary-value');
  if (serviceValue) {
    serviceValue.textContent = bookingState.service.name;
  }

  // Update barber
  const barberValue = document.querySelector('.summary-content .summary-item:nth-child(2) .summary-value');
  if (barberValue) {
    barberValue.textContent = bookingState.barber.name;
  }

  // Update date
  const dateValue = document.querySelector('.summary-content .summary-item:nth-child(3) .summary-value');
  if (dateValue) {
    dateValue.textContent = bookingState.date.fullDate;
  }

  // Update time
  const timeValue = document.querySelector('.summary-content .summary-item:nth-child(4) .summary-value');
  if (timeValue) {
    timeValue.textContent = bookingState.time;
  }

  // Update duration
  const durationValue = document.querySelector('.summary-content .summary-item:nth-child(5) .summary-value');
  if (durationValue) {
    durationValue.textContent = `${bookingState.service.duration} minutes`;
  }

  // Update total price
  const totalPrice = document.querySelector('.total-price');
  if (totalPrice) {
    totalPrice.textContent = `$${bookingState.service.price.toFixed(2)}`;
  }
}

// Calendar navigation (optional enhancement)
function navigateMonth(direction) {
  // This can be enhanced to actually change months
  console.log('Navigate month:', direction);
}

// Confirm booking and redirect to payment page
function confirmBooking() {
  // Validate that all required fields are selected
  if (!bookingState.service.name || !bookingState.barber.name || !bookingState.date.fullDate || !bookingState.time) {
    alert('Please complete all booking details before confirming.');
    return;
  }

  // Save booking state to localStorage
  localStorage.setItem('bookingData', JSON.stringify(bookingState));

  // Redirect to payment page
  window.location.href = 'payment.html';
}

