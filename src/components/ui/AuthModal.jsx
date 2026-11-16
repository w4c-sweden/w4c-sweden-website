import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";
import { Heading } from "./Typography";

export default function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState(initialMode);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      if (mode === "register") {
        await register({ firstName, email });
      } else {
        await login(email);
      }
      setFirstName("");
      setEmail("");
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
      <div className="bg-card-dark border border-line-dark rounded-2xl max-w-md w-full p-7 relative text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted hover:text-white text-sm"
          aria-label="Stäng"
        >
          Stäng
        </button>

        <Heading level={3} className="text-white mb-1">
          {mode === "register" ? "Bli medlem" : "Logga in"}
        </Heading>
        <p className="text-sm text-muted mb-6">
          {mode === "register"
            ? "Vi samlar bara in ditt förnamn och din e-postadress."
            : "Ange din e-postadress för att logga in."}
        </p>

        {error && (
          <div className="bg-red/15 border border-red text-red-light text-sm rounded-xl p-3 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                Förnamn
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ditt förnamn"
                className="w-full rounded-xl bg-bg-dark border border-line-dark px-4 py-2.5 text-text-main focus:outline-none focus:border-blue"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-text-main mb-1">
              E-postadress
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="namn@exempel.se"
              className="w-full rounded-xl bg-bg-dark border border-line-dark px-4 py-2.5 text-text-main focus:outline-none focus:border-blue"
            />
          </div>

          <Button
            type="submit"
            variant="red"
            className="w-full mt-2"
            disabled={submitting}
          >
            {submitting
              ? "Vänta..."
              : mode === "register"
                ? "Skapa medlemskap"
                : "Logga in"}
          </Button>
        </form>

        <div className="mt-5 pt-4 border-t border-line-dark text-sm text-center text-muted">
          {mode === "register" ? (
            <>
              Redan medlem?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setError("");
                }}
                className="text-blue hover:underline font-medium"
              >
                Logga in här
              </button>
            </>
          ) : (
            <>
              Inte medlem än?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
                className="text-blue hover:underline font-medium"
              >
                Bli medlem
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
