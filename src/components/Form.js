import React from "react";
import { TextField, PrimaryButton, Stack, ColorPicker, getColorFromHSV } from '@fluentui/react';

export default function Form() {
  const butonstyles = { rootHovered: {
    backgroundColor: "blue"
  }};
  const labelstyles = { root:{
    getColorFromHSV: "blue"
  }
  };
    return (
      <div className='Form'>
      <Stack tokens={{ childrenGap: 15 }} styles={{ root: { width: 300, margin: 'auto', padding: 10 ,   } }}>
        <TextField label="Name" required styles={labelstyles} />
        <TextField label="Email" type="email" required />
        <TextField label="Password" type="password" canRevealPassword required />
        <PrimaryButton text="Log In" styles={butonstyles} />
        <PrimaryButton text="Register" styles={butonstyles} />
      </Stack>
      </div>
    );
  }
  
