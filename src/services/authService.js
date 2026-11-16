const USE_MOCK = import.meta.env.VITE_USE_MOCK_AUTH === "true";

export const authService = {
  async loginWithEmail(email) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      const cleanEmail = email.trim().toLowerCase();
      const stored = JSON.parse(sessionStorage.getItem("w4c_mock_db") || "{}");

      if (!stored[cleanEmail]) {
        throw new Error(
          "Ingen medlem hittades med den e-postadressen. Registrera dig först.",
        );
      }

      return {
        firstName: stored[cleanEmail].firstName,
        isAuthenticated: true,
      };
    }

    // TODO: Replace with live ArcMember login endpoint or OAuth redirect
    throw new Error("Skarp ArcMember-inloggning är inte konfigurerad ännu.");
  },

  async registerMember({ firstName, email }) {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      const cleanEmail = email.trim().toLowerCase();
      const cleanName = firstName.trim();

      const stored = JSON.parse(sessionStorage.getItem("w4c_mock_db") || "{}");
      stored[cleanEmail] = { firstName: cleanName };
      sessionStorage.setItem("w4c_mock_db", JSON.stringify(stored));

      return {
        firstName: cleanName,
        isAuthenticated: true,
      };
    }

    // TODO: Replace with live ArcMember registration endpoint
    throw new Error("Skarp ArcMember-registrering är inte konfigurerad ännu.");
  },
};
