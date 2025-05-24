// 'use client';

// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';

// type ConfirmationData = {
//   name: string;
//   date: string;
//   time: string;
//   meetLink: string | null;
//   eventLink: string | null;
// };

// export default function BookingCalendar() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     brand: '',
//     message: '',
//     date: '',
//     time: '',
//     duration: 30,
//     package: 'Profit Pulse Check',
//     turnover: 'Â£100kâ€“500k',
//   });

//   const [availableTimes, setAvailableTimes] = useState<string[]>([]);
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>();
//   const [confirmation, setConfirmation] = useState<ConfirmationData | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!selectedDate || !formData.duration) return;

//     const fetchAvailability = async () => {
//       const isoDate = format(selectedDate, 'yyyy-MM-dd');
//       try {
//         const res = await fetch(`/api/availability?date=${isoDate}&duration=${formData.duration}`);
//         if (!res.ok) {
//           console.error('Availability fetch failed:', res.status);
//           setAvailableTimes([]);
//           return;
//         }
//         const data = await res.json();
//         setAvailableTimes(data.available || []);
//       } catch (error) {
//         console.error('Availability fetch error:', error);
//         setAvailableTimes([]);
//       }
//     };

//     fetchAvailability();
//   }, [selectedDate, formData.duration]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/book-call', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setConfirmation({
//           name: formData.name,
//           date: formData.date,
//           time: formData.time,
//           meetLink: data.meetLink,
//           eventLink: data.eventLink,
//         });
//       } else {
//         alert('Booking failed. Please try again.');
//       }
//     } catch (error) {
//       alert('Network error. Please try again.');
//       console.error('Booking error:', error);
//     }

//     setLoading(false);
//   };

//   if (confirmation) {
//     return (
//       <div className="confirmation">
//         <h2>Booking Confirmed</h2>
//         <p>Thanks, {confirmation.name}! Your call is booked for:</p>
//         <p>
//           {confirmation.date} at {confirmation.time}
//         </p>
//         {confirmation.meetLink && (
//           <p>
//             Join Google Meet:{' '}
//             <a href={confirmation.meetLink} target="_blank" rel="noopener noreferrer">
//               Click here
//             </a>
//           </p>
//         )}
//         {confirmation.eventLink && (
//           <p>
//             Event Details:{' '}
//             <a href={confirmation.eventLink} target="_blank" rel="noopener noreferrer">
//               View on Google Calendar
//             </a>
//           </p>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Profit Strategy Call</h2>

//       <div>
//         {[15, 30, 45, 60].map((dur) => (
//           <button
//             key={dur}
//             onClick={() => setFormData({ ...formData, duration: dur })}
//             style={{
//               backgroundColor: formData.duration === dur ? 'black' : 'lightgray',
//               color: formData.duration === dur ? 'white' : 'black',
//               marginRight: '8px',
//               padding: '8px 16px',
//               borderRadius: '20px',
//             }}
//           >
//             {dur}m
//           </button>
//         ))}
//       </div>

//       <DayPicker
//         mode="single"
//         selected={selectedDate}
//         onSelect={(date) => {
//           setSelectedDate(date);
//           if (date) setFormData({ ...formData, date: format(date, 'yyyy-MM-dd'), time: '' });
//         }}
//         disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() + 1))}
//       />

//       {availableTimes.length > 0 ? (
//         <div>
//           <p>Available Times:</p>
//           {availableTimes.map((time) => (
//             <button
//               key={time}
//               onClick={() => setFormData({ ...formData, time })}
//               style={{
//                 backgroundColor: formData.time === time ? 'black' : 'lightgray',
//                 color: formData.time === time ? 'white' : 'black',
//                 marginRight: '8px',
//                 padding: '8px 16px',
//                 borderRadius: '20px',
//               }}
//             >
//               {time}
//             </button>
//           ))}
//         </div>
//       ) : (
//         selectedDate && <p>No times available for the selected date.</p>
//       )}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Your brand"
//           value={formData.brand}
//           onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
//           required
//         />
//         <textarea
//           placeholder="Your message (optional)"
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//         />
//         <button type="submit" disabled={loading || !formData.date || !formData.time}>
//           {loading ? 'Booking...' : 'Book My Call'}
//         </button>
//       </form>
//     </div>
//   );
// }
