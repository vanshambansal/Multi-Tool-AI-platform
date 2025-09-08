// import React, { useState } from "react";

// const FeedbackForm = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [category, setCategory] = useState("");
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const [recommend, setRecommend] = useState("");
//   const [hoverRating, setHoverRating] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const categories = [
//     "General Feedback",
//     "Bug Report", 
//     "Feature Request",
//     "User Experience",
//     "Performance",
//     "Content Quality"
//   ];

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Please enter a valid email";
//     }
    
//     if (!feedback.trim()) {
//       newErrors.feedback = "Feedback is required";
//     } else if (feedback.trim().length < 10) {
//       newErrors.feedback = "Please provide more detailed feedback (at least 10 characters)";
//     }
    
//     if (rating === 0) {
//       newErrors.rating = "Please provide a rating";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     setTimeout(() => {
//       alert("Thank you for your valuable feedback! We'll use it to improve QuickAI.");
//       setIsSubmitting(false);
//       onClose();
//     }, 1500);
//   };

//   const clearError = (field) => {
//     if (errors[field]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[field];
//         return newErrors;
//       });
//     }
//   };

//   // Inline Styles
//   const overlayStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 50,
//     padding: '16px'
//   };

//   const modalStyle = {
//     position: 'relative',
//     backgroundColor: 'white',
//     borderRadius: '24px',
//     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//     width: '100%',
//     maxWidth: '512px',
//     maxHeight: '90vh',
//     overflowY: 'auto'
//   };

//   const headerStyle = {
//     background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
//     padding: '24px',
//     borderRadius: '24px 24px 0 0',
//     color: 'white',
//     position: 'relative',
//     overflow: 'hidden'
//   };

//   const closeButtonStyle = {
//     position: 'absolute',
//     top: '16px',
//     right: '16px',
//     color: 'rgba(255, 255, 255, 0.8)',
//     backgroundColor: 'transparent',
//     border: 'none',
//     borderRadius: '50%',
//     width: '32px',
//     height: '32px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     fontWeight: 'bold',
//     transition: 'all 0.2s'
//   };

//   const inputStyle = {
//     width: '100%',
//     border: '2px solid #e5e7eb',
//     borderRadius: '12px',
//     padding: '12px 16px',
//     color: '#374151',
//     outline: 'none',
//     transition: 'border-color 0.2s',
//     fontSize: '14px'
//   };

//   const inputFocusStyle = {
//     borderColor: '#4f46e5'
//   };

//   const errorInputStyle = {
//     ...inputStyle,
//     borderColor: '#fca5a5'
//   };

//   const labelStyle = {
//     display: 'block',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#374151',
//     marginBottom: '8px'
//   };

//   const buttonStyle = {
//     padding: '12px 24px',
//     borderRadius: '12px',
//     border: '2px solid #d1d5db',
//     backgroundColor: 'white',
//     color: '#374151',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.2s'
//   };

//   const selectedButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#4f46e5',
//     color: 'white',
//     borderColor: '#4f46e5'
//   };

//   const submitButtonStyle = {
//     flex: 1,
//     background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
//     color: 'white',
//     padding: '12px 24px',
//     borderRadius: '12px',
//     border: 'none',
//     fontWeight: '600',
//     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     fontSize: '16px'
//   };

//   return (
//     <div style={overlayStyle}>
//       <div style={modalStyle}>
        
//         {/* Header Section */}
//         <div style={headerStyle}>
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             right: 0,
//             width: '128px',
//             height: '128px',
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             borderRadius: '50%',
//             transform: 'translate(64px, -64px)'
//           }}></div>
//           <div style={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             width: '96px',
//             height: '96px',
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             borderRadius: '50%',
//             transform: 'translate(-48px, 48px)'
//           }}></div>
          
//           <button
//             onClick={onClose}
//             style={closeButtonStyle}
//             onMouseEnter={(e) => {
//               e.target.style.color = 'white';
//               e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.color = 'rgba(255, 255, 255, 0.8)';
//               e.target.style.backgroundColor = 'transparent';
//             }}
//           >
//             ✕
//           </button>
          
//           <div style={{ position: 'relative', zIndex: 10 }}>
//             <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
//               Share Your Experience
//             </h2>
//             <p style={{ color: '#c7d2fe' }}>
//               Help us make QuickAI even better with your insights
//             </p>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div style={{ padding: '24px' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
//             {/* Personal Info Row */}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
//               <div>
//                 <label style={labelStyle}>
//                   Name (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   style={inputStyle}
//                   placeholder="Your name"
//                   onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
//                   onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
//                 />
//               </div>
              
//               <div>
//                 <label style={labelStyle}>
//                   Email <span style={{ color: '#ef4444' }}>*</span>
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                     clearError("email");
//                   }}
//                   style={errors.email ? errorInputStyle : inputStyle}
//                   placeholder="your.email@example.com"
//                   onFocus={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : '#4f46e5'}
//                   onBlur={(e) => e.target.style.borderColor = errors.email ? '#fca5a5' : '#e5e7eb'}
//                 />
//                 {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
//               </div>
//             </div>

//             {/* Category Selection */}
//             <div>
//               <label style={labelStyle}>
//                 Feedback Category
//               </label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 style={inputStyle}
//                 onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
//                 onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
//               >
//                 <option value="">Select a category</option>
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Rating Section */}
//             <div>
//               <label style={labelStyle}>
//                 Overall Rating <span style={{ color: '#ef4444' }}>*</span>
//               </label>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '8px',
//                 padding: '16px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '12px'
//               }}>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => {
//                       setRating(star);
//                       clearError("rating");
//                     }}
//                     onMouseEnter={() => setHoverRating(star)}
//                     onMouseLeave={() => setHoverRating(0)}
//                     style={{
//                       background: 'none',
//                       border: 'none',
//                       cursor: 'pointer',
//                       transition: 'transform 0.2s',
//                       transform: 'scale(1)'
//                     }}
//                     onMouseOver={(e) => e.target.style.transform = 'scale(1.25)'}
//                     onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//                   >
//                     <svg
//                       style={{ width: '40px', height: '40px' }}
//                       fill={(hoverRating || rating) >= star ? "#f59e0b" : "none"}
//                       stroke="#f59e0b"
//                       strokeWidth={2}
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.042 6.29a1 1 0 00.95.69h6.604c.969 0 1.371 1.24.588 1.81l-5.354 3.89a1 1 0 00-.364 1.118l2.042 6.29c.3.921-.755 1.688-1.54 1.118l-5.354-3.89a1 1 0 00-1.176 0l-5.354 3.89c-.784.57-1.838-.197-1.54-1.118l2.042-6.29a1 1 0 00-.364-1.118L2.415 11.72c-.783-.57-.38-1.81.588-1.81h6.604a1 1 0 00.95-.69l2.042-6.29z"
//                       />
//                     </svg>
//                   </button>
//                 ))}
//                 <span style={{ marginLeft: '12px', color: '#6b7280', fontWeight: '500' }}>
//                   {rating > 0 && (
//                     rating === 5 ? "Excellent!" :
//                     rating === 4 ? "Great!" :
//                     rating === 3 ? "Good" :
//                     rating === 2 ? "Fair" : "Needs Work"
//                   )}
//                 </span>
//               </div>
//               {errors.rating && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.rating}</p>}
//             </div>

//             {/* Recommendation */}
//             <div>
//               <label style={labelStyle}>
//                 Would you recommend QuickAI to others?
//               </label>
//               <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
//                 {["Yes", "No", "Maybe"].map((option) => (
//                   <button
//                     key={option}
//                     type="button"
//                     onClick={() => setRecommend(option)}
//                     style={recommend === option ? selectedButtonStyle : buttonStyle}
//                     onMouseEnter={(e) => {
//                       if (recommend !== option) {
//                         e.target.style.borderColor = '#a5b4fc';
//                       }
//                     }}
//                     onMouseLeave={(e) => {
//                       if (recommend !== option) {
//                         e.target.style.borderColor = '#d1d5db';
//                       }
//                     }}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Feedback Text */}
//             <div>
//               <label style={labelStyle}>
//                 Your Feedback <span style={{ color: '#ef4444' }}>*</span>
//               </label>
//               <textarea
//                 value={feedback}
//                 onChange={(e) => {
//                   setFeedback(e.target.value);
//                   clearError("feedback");
//                 }}
//                 style={{
//                   ...inputStyle,
//                   height: '120px',
//                   resize: 'none',
//                   borderColor: errors.feedback ? '#fca5a5' : '#e5e7eb'
//                 }}
//                 placeholder="Tell us about your experience with QuickAI. What did you like? What could we improve?"
//                 onFocus={(e) => e.target.style.borderColor = errors.feedback ? '#ef4444' : '#4f46e5'}
//                 onBlur={(e) => e.target.style.borderColor = errors.feedback ? '#fca5a5' : '#e5e7eb'}
//               />
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
//                 {errors.feedback && <p style={{ color: '#ef4444', fontSize: '12px' }}>{errors.feedback}</p>}
//                 <p style={{ color: '#9ca3af', fontSize: '12px', marginLeft: 'auto' }}>{feedback.length}/500</p>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div style={{ display: 'flex', gap: '12px', paddingTop: '16px' }}>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 style={{
//                   flex: 1,
//                   padding: '12px 24px',
//                   border: '2px solid #d1d5db',
//                   color: '#374151',
//                   borderRadius: '12px',
//                   fontWeight: '600',
//                   backgroundColor: 'white',
//                   cursor: 'pointer',
//                   transition: 'background-color 0.2s'
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
//               >
//                 Cancel
//               </button>
              
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 style={{
//                   ...submitButtonStyle,
//                   opacity: isSubmitting ? 0.5 : 1,
//                   cursor: isSubmitting ? 'not-allowed' : 'pointer'
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isSubmitting) {
//                     e.target.style.transform = 'scale(1.02)';
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isSubmitting) {
//                     e.target.style.transform = 'scale(1)';
//                   }
//                 }}
//               >
//                 {isSubmitting ? (
//                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
//                     <div style={{
//                       width: '16px',
//                       height: '16px',
//                       border: '2px solid rgba(255, 255, 255, 0.3)',
//                       borderTop: '2px solid white',
//                       borderRadius: '50%',
//                       animation: 'spin 1s linear infinite'
//                     }}></div>
//                     Submitting...
//                   </div>
//                 ) : (
//                   "Submit Feedback"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div style={{ padding: '0 24px 24px' }}>
//           <div style={{
//             backgroundColor: '#f9fafb',
//             borderRadius: '12px',
//             padding: '16px',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px'
//           }}>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: '#e0e7ff',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//               🔒
//             </div>
//             <div>
//               <p style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937', margin: 0 }}>Your privacy matters</p>
//               <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>We'll only use your email to follow up on your feedback</p>
//             </div>
//           </div>
//         </div>

//         {/* Add CSS Animation */}
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;



















import React, { useState } from "react";

const FeedbackForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [recommend, setRecommend] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!feedback.trim()) newErrors.feedback = "Feedback is required";
    if (rating === 0) newErrors.rating = "Please provide a rating";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Thank you for your feedback!");
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  // Styles
  const styles = {
    overlay: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '20px'
    },
    modal: {
      backgroundColor: 'white', borderRadius: '20px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      width: '100%', maxWidth: '500px', position: 'relative'
    },
    header: {
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      padding: '30px 24px', borderRadius: '20px 20px 0 0',
      color: 'white', textAlign: 'center', position: 'relative'
    },
    closeBtn: {
      position: 'absolute', top: '15px', right: '15px',
      background: 'rgba(255,255,255,0.2)', border: 'none',
      color: 'white', width: '30px', height: '30px',
      borderRadius: '50%', cursor: 'pointer', fontSize: '16px'
    },
    content: { padding: '24px' },
    input: {
      width: '100%', padding: '12px', border: '2px solid #e5e7eb',
      borderRadius: '10px', fontSize: '14px', outline: 'none',
      transition: 'border-color 0.2s'
    },
    label: {
      display: 'block', fontSize: '14px', fontWeight: '500',
      color: '#374151', marginBottom: '6px'
    },
    starContainer: {
      display: 'flex', justifyContent: 'center', gap: '5px',
      padding: '15px', backgroundColor: '#f8fafc', borderRadius: '10px',
      alignItems: 'center'
    },
    star: {
      background: 'none', border: 'none', cursor: 'pointer',
      transition: 'transform 0.2s'
    },
    textarea: {
      width: '100%', padding: '12px', border: '2px solid #e5e7eb',
      borderRadius: '10px', fontSize: '14px', outline: 'none',
      resize: 'none', height: '100px', fontFamily: 'inherit'
    },
    buttonRow: { display: 'flex', gap: '10px', marginTop: '20px' },
    cancelBtn: {
      flex: 1, padding: '12px', border: '2px solid #d1d5db',
      backgroundColor: 'white', borderRadius: '10px',
      cursor: 'pointer', fontWeight: '600'
    },
    submitBtn: {
      flex: 1, padding: '12px', border: 'none',
      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
      color: 'white', borderRadius: '10px', cursor: 'pointer',
      fontWeight: '600', fontSize: '16px'
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        
        {/* Header */}
        <div style={styles.header}>
          <button onClick={onClose} style={styles.closeBtn}>×</button>
          <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
            Share Your Experience
          </h2>
          <p style={{ margin: '8px 0 0 0', opacity: 0.9 }}>
            Help us improve QuickAI
          </p>
        </div>

        {/* Form */}
        <div style={styles.content}>
          
          {/* Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.label}>
              Email <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({...prev, email: ''}));
              }}
              style={{
                ...styles.input,
                borderColor: errors.email ? '#ef4444' : '#e5e7eb'
              }}
              placeholder="your.email@example.com"
              onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
              onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : '#e5e7eb'}
            />
            {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0 0' }}>{errors.email}</p>}
          </div>

          {/* Rating */}
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.label}>
              Rating <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <div style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setRating(star);
                    if (errors.rating) setErrors(prev => ({...prev, rating: ''}));
                  }}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={styles.star}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  <svg
                    width="32" height="32"
                    fill={(hoverRating || rating) >= star ? "#f59e0b" : "none"}
                    stroke="#f59e0b" strokeWidth={2} viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.042 6.29a1 1 0 00.95.69h6.604c.969 0 1.371 1.24.588 1.81l-5.354 3.89a1 1 0 00-.364 1.118l2.042 6.29c.3.921-.755 1.688-1.54 1.118l-5.354-3.89a1 1 0 00-1.176 0l-5.354 3.89c-.784.57-1.838-.197-1.54-1.118l2.042-6.29a1 1 0 00-.364-1.118L2.415 11.72c-.783-.57-.38-1.81.588-1.81h6.604a1 1 0 00.95-.69l2.042-6.29z" />
                  </svg>
                </button>
              ))}
              <span style={{ marginLeft: '10px', color: '#6b7280', fontWeight: '500' }}>
                {rating === 5 ? "Excellent!" : rating === 4 ? "Great!" : rating === 3 ? "Good" : rating === 2 ? "Fair" : rating === 1 ? "Poor" : ""}
              </span>
            </div>
            {errors.rating && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0 0' }}>{errors.rating}</p>}
          </div>

          {/* Recommendation */}
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.label}>Would you recommend QuickAI?</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              {["Yes", "No", "Maybe"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRecommend(option)}
                  style={{
                    padding: '10px 20px', borderRadius: '8px',
                    border: recommend === option ? '2px solid #4f46e5' : '2px solid #d1d5db',
                    backgroundColor: recommend === option ? '#4f46e5' : 'white',
                    color: recommend === option ? 'white' : '#374151',
                    cursor: 'pointer', fontWeight: '500'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div style={{ marginBottom: '20px' }}>
            <label style={styles.label}>
              Your Feedback <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <textarea
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
                if (errors.feedback) setErrors(prev => ({...prev, feedback: ''}));
              }}
              style={{
                ...styles.textarea,
                borderColor: errors.feedback ? '#ef4444' : '#e5e7eb'
              }}
              placeholder="Tell us about your experience with QuickAI..."
              onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
              onBlur={(e) => e.target.style.borderColor = errors.feedback ? '#ef4444' : '#e5e7eb'}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              {errors.feedback && <p style={{ color: '#ef4444', fontSize: '12px', margin: 0 }}>{errors.feedback}</p>}
              <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0, marginLeft: 'auto' }}>{feedback.length}/500</p>
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.buttonRow}>
            <button onClick={onClose} style={styles.cancelBtn}>Cancel</button>
            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              style={{
                ...styles.submitBtn,
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>

        </div>

        {/* Custom CSS for hiding scrollbar */}
        <style>{`
          div::-webkit-scrollbar { width: 0px; background: transparent; }
          div { scrollbar-width: none; -ms-overflow-style: none; }
        `}</style>
      </div>
    </div>
  );
};

export default FeedbackForm;