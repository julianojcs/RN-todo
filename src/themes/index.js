import { StyleSheet } from "react-native";

export const locale = "pt-BR"

export const colors = {
  primary: "#004ba0",
  lightPrimary: "#1565c0",
  secondary: "#ffc107",
  lightSecondary: "#bbbbbb",
  danger: "#ff0000",
  background: "#eeeeee",
  foreground: "#24292f",
  text: "#ffffff"
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.foreground,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.text,
  },
  label: {
    fontSize: 16,
    textAlign: 'left',
    margin: 0,
    color: colors.text,
  },
  button: {
    alignSelf: 'center',
    textAlign: "center",
    minWidth: 100,
    backgroundColor: colors.lightPrimary,
    color: "#ffffff",
    borderRadius: 6,
    padding: 8,
    marginTop: 10,
    elevation: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: colors.secondary,
  },
  input: {
    marginVertical: 5,
    backgroundColor: colors.background,
    borderRadius: 6,
    fontSize: 18,
    color: colors.foreground,
  },
});
