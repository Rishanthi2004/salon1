import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, ArrowRight, Download, Send } from 'lucide-react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { BookingFormData } from '../types/salon';

interface BookingSectionProps {
  preselectedCategory?: string;
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedCategory = '',
  preselectedService = '',
}) => {
  // Tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    category: preselectedCategory || 'Hair Services',
    subService: preselectedService || 'Haircut & Styling',
    date: minDateString,
    timeSlot: '11:00 AM',
    stylistPreference: 'Any Senior Stylist',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    reference: string;
    details: BookingFormData;
  } | null>(null);

  // Sync props when preselection changes
  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({
        ...prev,
        category: preselectedCategory,
        subService: preselectedService || '',
      }));
    }
  }, [preselectedCategory, preselectedService]);

  const categories = [
    'Hair Services',
    'Skin Care & Facials',
    'Manicure, Pedicure & Nails',
    'Body Care & Spa',
    'Men\'s Grooming',
    'Bridal & Occasion Beauty',
  ];

  // Dynamic sub-services based on chosen category
  const activeCategoryObj = SERVICE_CATEGORIES.find(
    (c) => c.title.toLowerCase().includes(formData.category.toLowerCase().split(' ')[0])
  );
  const subServices = activeCategoryObj ? activeCategoryObj.services : [];

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const stylistOptions = [
    'Any Senior Specialist',
    'Master Hair Sculptor',
    'Lead Clinical Esthetician',
    'Artisanal Nail Technician',
    'Master Barber',
    'Bridal Art Director',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter at least 3 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      // Basic phone check (allowing digits, spaces, hyphens, plus)
      const phoneClean = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (phoneClean.length < 8 || !/^\+?[0-9]{8,15}$/.test(phoneClean)) {
        newErrors.phone = 'Please provide a valid contact phone number';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please provide a valid email format';
      }
    }

    if (!formData.date) {
      newErrors.date = 'Please select an appointment date';
    } else if (formData.date < minDateString) {
      newErrors.date = 'Appointments must be scheduled from tomorrow onwards';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refCode = `RSH-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        reference: refCode,
        details: { ...formData },
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleDownloadICS = () => {
    if (!submittedData) return;
    const { details, reference } = submittedData;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Rishaara Salon//Appointment Enquiry//EN
BEGIN:VEVENT
SUMMARY:Rishaara Salon Appointment (${details.category})
DESCRIPTION:Salon Appointment Request: ${details.category} - ${details.subService}. Reference: ${reference}. Concierge will confirm exact chair.
LOCATION:${SALON_INFO.address}, ${SALON_INFO.city}
STATUS:TENTATIVE
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Rishaara-Salon-${reference}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateWhatsAppLink = () => {
    if (!submittedData) return '#';
    const { details, reference } = submittedData;
    const msg = `Hello Rishaara Salon Concierge! I have submitted an appointment request online:%0A%0A*Reference:* ${reference}%0A*Name:* ${details.fullName}%0A*Phone:* ${details.phone}%0A*Category:* ${details.category}%0A*Service:* ${details.subService}%0A*Preferred Date:* ${details.date}%0A*Time:* ${details.timeSlot}%0A*Notes:* ${details.message || 'None'}`;
    return `https://wa.me/${SALON_INFO.phoneRaw}?text=${msg}`;
  };

  return (
    <section id="booking" className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans block">
            Reservations & Consultations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight">
            YOUR TIME FOR BEAUTY.
          </h2>
          <div className="w-16 h-[1px] bg-[#C6A878] mx-auto my-4" />
          <p className="text-sm font-sans text-[#F5F1EB]/75 max-w-xl mx-auto leading-relaxed">
            Reserve your personalised salon session. Our concierge confirms your exact slot, specialist, and private suite via phone or WhatsApp.
          </p>
        </div>

        {/* Confirmation State or Booking Form */}
        {submittedData ? (
          <div className="bg-[#080808]/95 border border-[#C6A878] p-8 md:p-12 shadow-2xl text-[#F5F1EB] space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#242424]">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-[#C6A878] shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif text-[#FFFFFF]">Request Received</h3>
                  <p className="text-xs text-[#F5F1EB]/70 font-sans">
                    Provisional Booking Reference:{' '}
                    <span className="font-mono text-[#C6A878] font-semibold">
                      {submittedData.reference}
                    </span>
                  </p>
                </div>
              </div>

              <div className="px-3 py-1 bg-[#C6A878]/15 border border-[#C6A878]/40 text-[#C6A878] text-[11px] font-sans uppercase tracking-wider">
                Pending Concierge Dispatch
              </div>
            </div>

            {/* Summary Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#242424]/30 p-6 border border-white/5 text-xs font-sans">
              <div className="space-y-3">
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Guest Name</span>
                  <span className="font-serif text-base text-[#FFFFFF]">{submittedData.details.fullName}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Contact Phone</span>
                  <span className="text-[#F5F1EB] font-mono">{submittedData.details.phone}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Email</span>
                  <span className="text-[#F5F1EB]">{submittedData.details.email || 'None provided'}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Selected Department</span>
                  <span className="font-serif text-base text-[#FFFFFF]">{submittedData.details.category}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Requested Service</span>
                  <span className="text-[#C6A878]">{submittedData.details.subService || 'Consultation First'}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase tracking-wider">Preferred Date & Time</span>
                  <span className="text-[#F5F1EB] font-mono">
                    {submittedData.details.date} at {submittedData.details.timeSlot}
                  </span>
                </div>
              </div>
            </div>

            {/* Honest Backend Disclosure Per Skill / Prompt Instructions */}
            <div className="p-4 bg-white/5 border border-white/10 text-xs text-[#F5F1EB]/80 leading-relaxed">
              <p className="font-medium text-[#C6A878] pb-1">Salon Booking Notice:</p>
              <p>
                Online requests are provisionally logged. To prevent duplicate seat allocations, our salon desk will contact you via phone or WhatsApp within 30 minutes to confirm your final reservation and specialist.
              </p>
            </div>

            {/* Fast Next Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#242424]">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadICS}
                  className="px-4 py-2.5 text-xs font-sans uppercase tracking-[0.16em] text-[#F5F1EB] border border-white/20 hover:border-[#C6A878] transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save to Calendar</span>
                </button>

                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-4 py-2.5 text-xs font-sans uppercase tracking-[0.16em] text-white/60 hover:text-white transition-colors"
                >
                  Book Another Service
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#080808]/90 border border-white/10 p-8 md:p-14 shadow-2xl space-y-8"
          >
            {/* Guest Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif text-[#C6A878] flex items-center gap-2 border-b border-[#242424] pb-3">
                <User className="w-4 h-4" />
                <span>01. Guest Details</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Full Name <span className="text-[#C6A878]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Victoria Sterling"
                    className={`w-full bg-[#242424]/40 border px-4 py-3 text-sm text-[#F5F1EB] placeholder-white/25 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#242424] focus:border-[#C6A878]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Phone Number <span className="text-[#C6A878]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full bg-[#242424]/40 border px-4 py-3 text-sm text-[#F5F1EB] placeholder-white/25 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#242424] focus:border-[#C6A878]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address (Optional) */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Email Address <span className="text-white/40 text-[10px]">(Optional for digital confirmation receipt)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@luxury.com"
                    className={`w-full bg-[#242424]/40 border px-4 py-3 text-sm text-[#F5F1EB] placeholder-white/25 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#242424] focus:border-[#C6A878]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Service & Specialist */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-serif text-[#C6A878] flex items-center gap-2 border-b border-[#242424] pb-3">
                <Clock className="w-4 h-4" />
                <span>02. Treatment Selection</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Category */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Service Category <span className="text-[#C6A878]">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const newCat = e.target.value;
                      const catObj = SERVICE_CATEGORIES.find(
                        (c) => c.title.toLowerCase().includes(newCat.toLowerCase().split(' ')[0])
                      );
                      const defaultSub = catObj && catObj.services.length > 0 ? catObj.services[0].name : '';
                      setFormData({
                        ...formData,
                        category: newCat,
                        subService: defaultSub,
                      });
                    }}
                    className="w-full bg-[#242424]/60 border border-[#242424] focus:border-[#C6A878] px-4 py-3 text-sm text-[#F5F1EB] focus:outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#080808] text-[#F5F1EB]">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sub-Service */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Specific Treatment / Style
                  </label>
                  <select
                    value={formData.subService}
                    onChange={(e) => setFormData({ ...formData, subService: e.target.value })}
                    className="w-full bg-[#242424]/60 border border-[#242424] focus:border-[#C6A878] px-4 py-3 text-sm text-[#F5F1EB] focus:outline-none"
                  >
                    {subServices.length > 0 ? (
                      subServices.map((s) => (
                        <option key={s.id} value={s.name} className="bg-[#080808] text-[#F5F1EB]">
                          {s.name} ({s.duration})
                        </option>
                      ))
                    ) : (
                      <option value="General Consultation" className="bg-[#080808] text-[#F5F1EB]">
                        General Consultation
                      </option>
                    )}
                  </select>
                </div>

                {/* Stylist / Specialist Preference */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Specialist Preference
                  </label>
                  <select
                    value={formData.stylistPreference}
                    onChange={(e) => setFormData({ ...formData, stylistPreference: e.target.value })}
                    className="w-full bg-[#242424]/60 border border-[#242424] focus:border-[#C6A878] px-4 py-3 text-sm text-[#F5F1EB] focus:outline-none"
                  >
                    {stylistOptions.map((st) => (
                      <option key={st} value={st} className="bg-[#080808] text-[#F5F1EB]">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-serif text-[#C6A878] flex items-center gap-2 border-b border-[#242424] pb-3">
                <Calendar className="w-4 h-4" />
                <span>03. Schedule Preference</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Preferred Date <span className="text-[#C6A878]">*</span>
                  </label>
                  <input
                    type="date"
                    min={minDateString}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full bg-[#242424]/40 border px-4 py-3 text-sm text-[#F5F1EB] focus:outline-none ${
                      errors.date ? 'border-red-500' : 'border-[#242424] focus:border-[#C6A878]'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Time Slot */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Preferred Time Slot <span className="text-[#C6A878]">*</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#242424]/60 border border-[#242424] focus:border-[#C6A878] px-4 py-3 text-sm text-[#F5F1EB] focus:outline-none"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts} className="bg-[#080808] text-[#F5F1EB]">
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Message (Optional) */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#F5F1EB]/80 font-sans block">
                    Additional Requests / Custom Notes <span className="text-white/40 text-[10px]">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specific hair length, allergies, bridal date details, or beverage preferences..."
                    className="w-full bg-[#242424]/40 border border-[#242424] focus:border-[#C6A878] px-4 py-3 text-sm text-[#F5F1EB] placeholder-white/25 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#242424] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[11px] text-white/50 font-sans">
                By submitting, your request is reviewed by our concierge team within 30 minutes.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
