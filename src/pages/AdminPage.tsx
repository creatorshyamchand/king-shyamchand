
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "@/components/admin/AdminLogin";
import Dashboard from "@/components/admin/Dashboard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AdminPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if admin is authenticated
    const adminAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    setIsAuthenticated(adminAuthenticated);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold mb-8 text-center">Admin Login</h1>
              <AdminLogin />
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  For demo purposes, use username: "admin" and password: "password"
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminPage;
