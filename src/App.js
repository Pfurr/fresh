import React from "react";
import "./styles.css";

import { Form, Field, useForm } from "@leveluptuts/fresh";

const securityQuestions = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What was the name of your first school?"
];

const onSubmit = (data) => console.log(data);

function UserProfileForm() {
  return (
    // 1 -> nome, cognome, email -> obbligatorio
    <Form formId="user-profile" onSubmit={onSubmit}>
      <Field required>First Name</Field>
      <Field required>Last Name</Field>
      <Field required type="email">
        Email
      </Field>

      {/* 2 -> seletore domande da scegliere -> obbligatorio */}
      <Field required type="select" options={securityQuestions}>
        Security Question
      </Field>

      {/* 3 -> risposta obbligatoria sicurezza -> obbligatorio */}
      <Field required>Security Answer</Field>

      {/* 4 -> scrivi bio -> opzionale */}
      <Field type="textarea">Bio</Field>
    </Form>
  );
}

export default function App() {
  // data contiene un formId, oggetto, chiamato -> user-profile
  // vuoto all'inizio, chiamando la funzione onSubmit -> si popola
  const { data } = useForm();

  return (
    <div className="App">
      <pre>{JSON.stringify(data)}</pre>
      <UserProfileForm />
    </div>
  );
}
