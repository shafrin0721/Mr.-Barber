# Mr. Barber - Frontend Application

A complete responsive frontend application for a barber booking system built with HTML, CSS, and JavaScript.

## Project Structure

```
├── index.html              # Login page (redirects to login)
├── create-account.html     # User registration page
├── dashboard.html          # Main dashboard
├── book-appointment.html   # Appointment booking page
├── barbers.html           # Professional barbers listing
├── queue-status.html      # Queue management page
├── feedback.html          # User feedback page
├── payment.html           # Payment processing page
├── settings.html          # User profile settings
├── loyalty.html           # Loyalty rewards page
├── contact.html           # Contact us page
├── css/
│   ├── styles.css         # Main stylesheet (shared components)
│   ├── login.css          # Login/Create account styles
│   ├── dashboard.css      # Dashboard specific styles
│   ├── book-appointment.css # Booking page styles
│   ├── barbers.css        # Barbers listing styles
│   ├── queue-status.css   # Queue status styles
│   ├── feedback.css       # Feedback page styles
│   ├── payment.css        # Payment page styles
│   ├── settings.css       # Settings page styles
│   ├── loyalty.css        # Loyalty page styles
│   └── contact.css        # Contact page styles
└── js/
    ├── common.js          # Common JavaScript functions
    ├── sidebar.js         # Sidebar navigation logic
    └── footer.js          # Footer generation

```

## Features

### Pages Included:
1. **Login Page** (`index.html`) - User authentication
2. **Create Account** (`create-account.html`) - User registration
3. **Dashboard** (`dashboard.html`) - Main user dashboard with appointments, queue status, and notifications
4. **Book Appointment** (`book-appointment.html`) - Multi-step booking process
5. **Barbers** (`barbers.html`) - Browse and filter professional barbers
6. **Queue Status** (`queue-status.html`) - Real-time queue management
7. **Feedback** (`feedback.html`) - User feedback and rating system
8. **Payment** (`payment.html`) - Payment processing with booking summary
9. **Settings** (`settings.html`) - User profile and preferences
10. **Loyalty Rewards** (`loyalty.html`) - Points, rewards, and tier benefits
11. **Contact Us** (`contact.html`) - Contact information and form

### Key Features:
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, clean UI with consistent design system
- ✅ Dark sidebar navigation with active state indicators
- ✅ Reusable components (Sidebar, Footer)
- ✅ Interactive elements (forms, buttons, cards)
- ✅ Smooth transitions and hover effects
- ✅ Accessible form inputs and labels

## Getting Started

1. **Open the project**: Simply open any HTML file in a web browser
2. **Start with**: Open `index.html` to begin with the login page
3. **Navigation**: Use the sidebar to navigate between pages

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Color Palette

- **Primary Dark**: `#1A1A2E` (Sidebar, Footer)
- **Gold/Accent**: `#D4AF37` (Active states, branding)
- **Orange**: `#FF6B35` (Booking highlights)
- **Blue**: `#2563EB` (Primary actions)
- **Green**: `#10B981` (Success states)
- **Purple**: `#9333EA` (Special features)

## Notes

- All pages are static HTML/CSS/JS (no backend required)
- Forms are set to prevent default submission (for demo purposes)
- Sidebar and Footer are dynamically generated via JavaScript
- Mobile menu toggle available on smaller screens

## Customization

To customize colors, fonts, or spacing, edit the main `css/styles.css` file. Each page has its own CSS file for page-specific styling.

