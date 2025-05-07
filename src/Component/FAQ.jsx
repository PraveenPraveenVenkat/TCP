// import * as React from "react";
// import {
//   Box,
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   TextField,
//   Popover,
// } from "@mui/material";

// const steps = ["FAQ", "Contact Details", "Review & Submit"];

// export default function HorizontalLinearStepper () {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const openPopover = Boolean(anchorEl);
//   const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
//   const handlePopoverClose = () => setAnchorEl(null);

//   const [formData, setFormData] = React.useState({
//     faq1: "",
//     faq1Answer: "",
//     faq2: "",
//     faq2Answer: "",
//     name: "",
//     email: "",
//     message: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, file }));
//   };

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prev) => prev + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prev) => prev - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }
//     setActiveStep((prev) => prev + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setFormData({
//       faq1: "",
//       faq1Answer: "",
//       faq2: "",
//       faq2Answer: "",
//       name: "",
//       email: "",
//       message: "",
//       file: null,
//     });
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
//             <Typography variant="h6">Add FAQ Questions</Typography>
//             <TextField
//               label="Question 1"
//               name="faq1"
//               value={formData.faq1}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Answer 1"
//               name="faq1Answer"
//               value={formData.faq1Answer}
//               onChange={handleChange}
//               multiline
//               rows={2}
//             />
//             <TextField
//               label="Question 2"
//               name="faq2"
//               value={formData.faq2}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Answer 2"
//               name="faq2Answer"
//               value={formData.faq2Answer}
//               onChange={handleChange}
//               multiline
//               rows={2}
//             />
//             {/* <Button variant="outlined" component="label" sx={{width:'25rem',alignContent:'center'}}>
//               Upload Screenshot or Issue File
//               <input type="file" hidden onChange={handleFileChange} />
//             </Button> */}
//             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//   <Button
//     variant="outlined"
//     component="label"
//     sx={{ width: '25rem' }}
//   >
//     Upload Screenshot or Issue File
//     <input type="file" hidden onChange={handleFileChange} />
//   </Button>
// </Box>

//             {formData.file && (
//               <Typography variant="body2">Selected file: {formData.file.name}</Typography>
//             )}
//           </Box>
//         );
//       case 1:
//         return (
//           <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
//             <Typography variant="h6">Contact Information</Typography>
//             <TextField
//               label="Full Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//             />
//             <TextField
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               multiline
//               rows={3}
//             />
//           </Box>
//         );
//       case 2:
//         return (
//           <Box sx={{ mt: 2 }}>
//             <Typography variant="h6">Review Your Submission</Typography>
//             <Typography><strong>FAQ 1:</strong> {formData.faq1}</Typography>
//             <Typography><strong>Answer 1:</strong> {formData.faq1Answer}</Typography>
//             <Typography><strong>FAQ 2:</strong> {formData.faq2}</Typography>
//             <Typography><strong>Answer 2:</strong> {formData.faq2Answer}</Typography>
//             <br />
//             <Typography><strong>Name:</strong> {formData.name}</Typography>
//             <Typography><strong>Email:</strong> {formData.email}</Typography>
//             <Typography><strong>Message:</strong> {formData.message}</Typography>
//             <Typography>
//               <strong>Uploaded File:</strong>{" "}
//               {formData.file ? formData.file.name : "No file uploaded"}
//             </Typography>
//           </Box>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//      <Box sx={{ width: "100%", backgroundColor: "white", color: "black", p: 2,width:'100' }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       {activeStep === steps.length ? (
//         <>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed — you're finished!
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </>
//       ) : (
//         <>
//           <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1,ml:'2rem' }}
//             >
//               Back
//             </Button>

//             <Button onClick={handlePopoverOpen} sx={{ mr: 1 }}>
//               Help
//             </Button>
//             <Popover
//               open={openPopover}
//               anchorEl={anchorEl}
//               onClose={handlePopoverClose}
//               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//             >
//               <Box sx={{ p: 2 }}>
//                 <Typography variant="body2">
//                   Please complete the form before clicking "Next".
//                 </Typography>
//               </Box>
//             </Popover>

//             <Box sx={{ flex: "1 1 auto" }} />

//             {isStepOptional(activeStep) && (
//               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                 Skip
//               </Button>
//             )}
//             <Button onClick={handleNext} sx={{marginRight:'6rem'}}>
//               {activeStep === steps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// };
  


import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Popover,
} from "@mui/material";

const steps = ["FAQ", "Contact Details", "Review & Submit"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPopover = Boolean(anchorEl);

  const [formData, setFormData] = React.useState({
    faq1: "",
    faq1Answer: "",
    faq2: "",
    faq2Answer: "",
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prev) => {
      const newSkipped = new Set(prev.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      faq1: "",
      faq1Answer: "",
      faq2: "",
      faq2Answer: "",
      name: "",
      email: "",
      message: "",
      file: null,
    });
  };

  const inputBoxStyle = {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    maxWidth: 600,
    marginX: "auto",
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={inputBoxStyle}>
            <Typography variant="h6" sx={{color:'black', fontFamily:
      '-apple-system', alignContent:'center'}}>Add FAQ Questions</Typography>
            <TextField label="Question 1" name="faq1" value={formData.faq1} onChange={handleChange} />
            <TextField
              label="Answer 1"
              name="faq1Answer"
              value={formData.faq1Answer}
              onChange={handleChange}
              multiline
              rows={2}
            />
            <TextField label="Question 2" name="faq2" value={formData.faq2} onChange={handleChange} />
            <TextField
              label="Answer 2"
              name="faq2Answer"
              value={formData.faq2Answer}
              onChange={handleChange}
              multiline
              rows={2}
            />
            <Button variant="outlined" component="label" sx={{ alignSelf: "center", width: "20rem",color:'black', }}>
              Upload Screenshot or Issue File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {formData.file && (
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Selected file: {formData.file.name}
              </Typography>
            )}
          </Box>
        );

      case 1:
        return (
          <Box sx={inputBoxStyle}>
            <Typography variant="h6" sx={{color:'black'}}>Contact Information</Typography>
            <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Box>
        );

      case 2:
        return (
          <Box sx={inputBoxStyle} >
            <Typography variant="h6"sx={{ color:'black' }} >Review Your Submission</Typography>
            <Typography sx={{ color:'black' }}><strong>FAQ 1:</strong> {formData.faq1}</Typography>
            <Typography sx={{ color:'black' }}><strong>Answer 1:</strong> {formData.faq1Answer}</Typography>
            <Typography sx={{ color:'black' }}><strong>FAQ 2:</strong> {formData.faq2}</Typography>
            <Typography sx={{ color:'black' }}><strong>Answer 2:</strong> {formData.faq2Answer}</Typography>
            <Typography sx={{ color:'black' }}><strong>Name:</strong> {formData.name}</Typography>
            <Typography sx={{ color:'black' }}><strong>Email:</strong> {formData.email}</Typography>
            <Typography sx={{ color:'black' }}><strong>Message:</strong> {formData.message}</Typography>
            <Typography sx={{ color:'black' }}><strong>Uploaded File:</strong> {formData.file ? formData.file.name : "No file uploaded"}</Typography>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100", bgcolor: "white", p: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            All steps completed — you're finished!
          </Typography>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      ) : (
        <>
          {renderStepContent(activeStep)}

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Box>
            <Button
  disabled={activeStep === 0}
  onClick={handleBack}
  sx={{
    mr: 1,
    backgroundImage: 'linear-gradient(to right,  #4ecdc4, #556270)',
    color: 'black',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right,  #4ecdc4, #556270)',
    },
  }}
>
  Back
</Button>

              {/* <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button> */}
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handlePopoverOpen}>Help</Button>
              <Popover
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2">
                    Please complete the form before clicking "Next".
                  </Typography>
                </Box>
              </Popover>
            </Box>
            <Button
  variant="contained"
  onClick={handleNext}
  sx={{
    backgroundImage: 'linear-gradient(to right,  #a770ef, #cf8bf3, #fdb99b)',
    color: 'white', // Ensure text is readable
    '&:hover': {
      backgroundImage: 'linear-gradient(to right,  #a770ef, #cf8bf3, #fdb99b)' // Optional: darken on hover
    }
  }}
>
  {activeStep === steps.length - 1 ? "Finish" : "Next"}
</Button>
            {/* <Button variant="contained" onClick={handleNext} sx={{backgroundColor:'#654ea3'}}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button> */}
          </Box>
        </>
      )}
    </Box>
  );
}





// // Import React and Material UI components
// import * as React from "react";
// import {
//   Box,
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   TextField,
//   Popover,
// } from "@mui/material";
// // Define step labels for the Stepper
// const steps = ["FAQ", "Contact Details", "Review & Submit"];

// export default function HorizontalLinearStepper() {
//   // Track which step is currently active
//   const [activeStep, setActiveStep] = React.useState(0);

//   // Track which steps have been skipped
//   const [skipped, setSkipped] = React.useState(new Set());

//   // Manage state for the Popover (tooltip-like help box)
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const openPopover = Boolean(anchorEl); // Boolean to control open/close
//   const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget); // Opens popover
//   const handlePopoverClose = () => setAnchorEl(null); // Closes popover

//   // Store all form data including FAQ, contact info, and uploaded file
//   const [formData, setFormData] = React.useState({
//     faq1: "",
//     faq1Answer: "",
//     faq2: "",
//     faq2Answer: "",
//     name: "",
//     email: "",
//     message: "",
//     file: null, // stores uploaded file object
//   });

//   // Handles change in text inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handles file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0]; // Get first selected file
//     setFormData((prev) => ({ ...prev, file }));
//   };

//   // Make step 2 (index 1) optional
//   const isStepOptional = (step) => step === 1;

//   // Check if a step was skipped
//   const isStepSkipped = (step) => skipped.has(step);

//   // Go to the next step
//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep); // Remove step from skipped if it was
//     }
//     setActiveStep((prev) => prev + 1);
//     setSkipped(newSkipped);
//   };

//   // Go back to the previous step
//   const handleBack = () => setActiveStep((prev) => prev - 1);

//   // Handle "Skip" button logic for optional step
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }
//     setActiveStep((prev) => prev + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   // Reset form to start over
//   const handleReset = () => {
//     setActiveStep(0);
//     setFormData({
//       faq1: "",
//       faq1Answer: "",
//       faq2: "",
//       faq2Answer: "",
//       name: "",
//       email: "",
//       message: "",
//       file: null,
//     });
//   };

//   // Render content for each step
//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0: // Step 1: FAQ
//         return (
//           <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2, }}>
//             <Typography variant="h6">Add FAQ Questions</Typography>
//             <TextField
//               label="Question 1"
//               name="faq1"
//               value={formData.faq1}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Answer 1"
//               name="faq1Answer"
//               value={formData.faq1Answer}
//               onChange={handleChange}
//               multiline
//               rows={2}
//             />
//             <TextField
//               label="Question 2"
//               name="faq2"
//               value={formData.faq2}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Answer 2"
//               name="faq2Answer"
//               value={formData.faq2Answer}
//               onChange={handleChange}
//               multiline
//               rows={2}
//             />
//             {/* Upload button for files */}
//             <Button variant="outlined" component="label">
//               Upload Screenshot or Issue File
//               <input type="file" hidden onChange={handleFileChange} />
//             </Button>
//             {/* Show file name if uploaded */}
//             {formData.file && (
//               <Typography variant="body2">Selected file: {formData.file.name}</Typography>
//             )}
//           </Box>
//         );

//       case 1: // Step 2: Contact Info
//         return (
//           <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
//             <Typography variant="h6">Contact Information</Typography>
//             <TextField
//               label="Full Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//             />
//             <TextField
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               multiline
//               rows={3}
//             />
//           </Box>
//         );

//       case 2: // Step 3: Review
//         return (
//           <Box sx={{ mt: 2 }}>
//             <Typography variant="h6">Review Your Submission</Typography>
//             <Typography><strong>FAQ 1:</strong> {formData.faq1}</Typography>
//             <Typography><strong>Answer 1:</strong> {formData.faq1Answer}</Typography>
//             <Typography><strong>FAQ 2:</strong> {formData.faq2}</Typography>
//             <Typography><strong>Answer 2:</strong> {formData.faq2Answer}</Typography>
//             <br />
//             <Typography><strong>Name:</strong> {formData.name}</Typography>
//             <Typography><strong>Email:</strong> {formData.email}</Typography>
//             <Typography><strong>Message:</strong> {formData.message}</Typography>
//             <Typography>
//               <strong>Uploaded File:</strong>{" "}
//               {formData.file ? formData.file.name : "No file uploaded"}
//             </Typography>
//           </Box>
//         );

//       default:
//         return null;
//     }
//   };

//   // Final component render
//   return (
//     <Box sx={{ width: "100%", backgroundColor: "white", color: "black", p: 2,width:'100' }}>
//       {/* Stepper UI */}
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       {/* Completion Message */}
//       {activeStep === steps.length ? (
//         <>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed — you're finished!
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </>
//       ) : (
//         <>
//           {/* Dynamic step content */}
//           <Box sx={{ mt: 2 }}>{renderStepContent(activeStep)}</Box>

//           {/* Navigation Buttons */}
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             {/* Back button */}
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1, ml: '2rem' }}
//             >
//               Back
//             </Button>

//             {/* Help popover */}
//             <Button onClick={handlePopoverOpen} sx={{ mr: 1 }}>
//               Help
//             </Button>
//                         <Popover
//               open={openPopover}
//               anchorEl={anchorEl}
//               onClose={handlePopoverClose}
//               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//             >
//               <Box sx={{ p: 2 }}>
//                 <Typography variant="body2">
//                   Please complete the form before clicking "Next".
//                 </Typography>
//               </Box>
//             </Popover>

//             <Box sx={{ flex: "1 1 auto" }} />

//             {isStepOptional(activeStep) && (
//               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                 Skip
//               </Button>
//             )}
//             <Button onClick={handleNext} sx={{marginRight:'6rem'}}>
//               {activeStep === steps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// }
