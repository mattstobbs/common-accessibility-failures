import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const AccessibilityToggle = ({ accessibility, setAccessibility }) => {
  const handleChange = (event) => {
    setAccessibility(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={accessibility}
            onChange={handleChange}
            aria-label="accessibility switch"
            color="primary"
          />
        }
        label={'Accessibility'}
        labelPlacement="start"
      />
    </FormGroup>
  );
};

export default AccessibilityToggle;
