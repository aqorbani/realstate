import DashboardSidebar from "@/layout/DashboardSidebar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 lg:w-1/5">
        <DashboardSidebar />
      </div>
      <div className="w-full md:w-2/3 lg:w-4/5">{children}</div>
    </div>
  );
}
