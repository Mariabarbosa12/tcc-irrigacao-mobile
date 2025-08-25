import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  backButton: {
    position: "absolute",
    left: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  headerTitle: {
    color: "#0C1792",
    fontSize: 28,
    fontWeight: "bold",
  },

  // Caixa do chat
  chatBox: {
    backgroundColor: "rgba(255,255,255)",
    
    width: 300,
    alignSelf: "center",
    height: 500,
    marginTop: 30,
    borderRadius: 15,
    padding: 20,
  },
  chatHeader: {
    fontWeight: "bold",
    backgroundColor: "#b3d7ff",
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 10,
    
  },

  mensagensChat: {
    flex: 1,
  },
  msgEsquerda: {
    alignSelf: "flex-start",
    backgroundColor: "#b3d7ff",
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: "75%",
  },
  msgDireita: {
    alignSelf: "flex-end",
    backgroundColor: "#91cba3",
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: "75%",
  },

  // Entrada
  entradaChat: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#b3d7ff",
    fontSize: 17,
    fontStyle: "italic",
  },
  sendButton: {
    backgroundColor: "#b3d7ff",
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sendIcon: {
    width: 30,
    height: 30,
  },
});
