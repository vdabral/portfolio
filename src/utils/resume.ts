/**
 * Opens the resume in a new browser tab AND triggers an automatic file download.
 */
export const handleResumeClick = () => {
  const fileUrl = 'https://drive.google.com/file/d/1XKJvep5MuimcMNJ66Wn94HxIlpYnwelG/view?usp=sharing';
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1XKJvep5MuimcMNJ66Wn94HxIlpYnwelG';

  // 1. Open in new tab
  window.open(fileUrl, '_blank', 'noopener,noreferrer');

  // 2. Trigger automatic download
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', 'Vaibhav_Dabral_Resume.pdf');
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
