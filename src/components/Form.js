import React from "react";
import { TextField, PrimaryButton, Stack } from '@fluentui/react';

export default function Form() {
    return (
      <Stack tokens={{ childrenGap: 15 }} styles={{ root: { width: 300, margin: 'auto', padding: 20 } }}>
        <TextField label="Name" required />
        <TextField label="Email" type="email" required />
        <TextField label="Password" type="password" canRevealPassword required />
        <PrimaryButton text="Submit" />
      </Stack>
    );
  }
  
