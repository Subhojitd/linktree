import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function LoginPage() {
  return (
    <div>
      <div className="bg-white border p-4 max-w-xs mx-auto shadow-md">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <LoginWithGoogle />
      </div>
    </div>
  );
}
