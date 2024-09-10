import FormField from "@/components/FormField";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

type FormProps = {
  email: string;
  password: string;
};

export default function HomeScreen() {
  const [form, setForm] = useState<FormProps>({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.centeredContainer}>
        <ThemedText style={{ marginBottom: 30 }} type="title">
          NPDL Trainer Plan
        </ThemedText>
        <FormField
          title="Email"
          value={form.email}
          placeholder="Enter your email"
          keyboardType="email-address"
          handleChangeText={(e) => {
            setForm({ ...form, email: e });
          }}
        />
        <FormField
          title="Password"
          value={form.password}
          placeholder="Enter your password"
          handleChangeText={(e) => {
            setForm({ ...form, password: e });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    height: 50,
    marginTop: 20,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
});
