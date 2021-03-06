import React from "react";
import * as Yup from "yup";
import SafeView from "../components/SafeView";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = (props) => {
  return (
    <SafeView padding>
      <Form
        validationSchema={validationSchema}
        initialValues={validationSchema.default()}
        onSubmit={() => {}}
      >
        <FormField name="name" icon="account" placeholder="Name" />

        <FormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <FormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </Form>
    </SafeView>
  );
};

RegisterScreen.defaultProps = {};

export default RegisterScreen;
