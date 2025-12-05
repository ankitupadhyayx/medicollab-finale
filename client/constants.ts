import {
  MedicalRecord,
  UserRole,
  AnalyticsData,
  Hospital,
  Appointment,
  Patient,
  Dispute,
  AuditLog,
  Reminder,
  PatientProfile,
  HospitalProfile,
  Bill,
  Report
} from "./types";

export const MOCK_RECORDS: MedicalRecord[] = [
  {
    id: "1",
    title: "Annual Cardiac Checkup",
    hospitalName: "AIIMS Delhi",
    date: "2024-01-12",
    type: "Lab Report",
    status: "APPROVED",
    description:
      "Blood report indicates high cholesterol. Advised low-fat diet and exercise.",
    imageUrl: "https://picsum.photos/400/300?random=101",
    aiAnalyzed: true
  },
  {
    id: "2",
    title: "MRI Scan - Lumbar Spine",
    hospitalName: "Apollo Hospitals Chennai",
    date: "2024-02-20",
    type: "Imaging",
    status: "PENDING",
    description:
      "Signs of disc bulge observed. Suggested physiotherapy for 6 weeks.",
    imageUrl: "https://picsum.photos/400/300?random=102"
  },
  {
    id: "3",
    title: "Dermatology Consultation",
    hospitalName: "Fortis Hospital Mumbai",
    date: "2024-03-05",
    type: "Prescription",
    status: "REJECTED",
    description:
      "Prescription for eczema treatment. Rejected due to insurance mismatch."
  },
  {
    id: "4",
    title: "Emergency Visit Summary",
    hospitalName: "Manipal Hospital Bengaluru",
    date: "2024-04-15",
    type: "Discharge Summary",
    status: "PENDING",
    description:
      "Severe gastritis diagnosed after acute abdominal pain. Prescribed medication.",
    aiAnalyzed: true
  }
];

export const MOCK_PENDING_APPOINTMENTS: Appointment[] = [
  {
    id: "apt-pending-1",
    hospitalId: "h1",
    hospitalName: "Max Hospital Delhi",
    date: "2024-04-21",
    time: "11:00 AM",
    reason: "Blood pressure checkup",
    status: "PENDING"
  }
];

export const HOSPITAL_APPOINTMENT_REQUESTS: Appointment[] = [
  {
    id: "req-1",
    hospitalId: "h1",
    hospitalName: "AIIMS Delhi",
    date: "2024-05-02",
    time: "10:30 AM",
    reason: "Chest pain follow-up",
    status: "PENDING"
  },
  {
    id: "req-2",
    hospitalId: "h2",
    hospitalName: "Apollo Hospitals Chennai",
    date: "2024-05-06",
    time: "01:45 PM",
    reason: "Regular medical checkup",
    status: "PENDING"
  }
];

export const MOCK_PATIENTS: Patient[] = [
  { id: "p1", name: "Ravi Kumar", age: 46, gender: "M", lastVisit: "2024-03-28", status: "Active", aiFlag: true },
  { id: "p2", name: "Priya Sharma", age: 29, gender: "F", lastVisit: "2024-03-21", status: "Recovered" },
  { id: "p3", name: "Vikas Gupta", age: 55, gender: "M", lastVisit: "2024-03-11", status: "Active" },
  { id: "p4", name: "Asha Verma", age: 63, gender: "F", lastVisit: "2024-02-25", status: "Critical", aiFlag: true },
  { id: "p5", name: "Rahul Mehta", age: 35, gender: "M", lastVisit: "2024-02-18", status: "Active", aiFlag: true }
];

export const ANALYTICS_DATA: AnalyticsData[] = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 135 },
  { name: "Mar", value: 128 },
  { name: "Apr", value: 150 },
  { name: "May", value: 162 },
  { name: "Jun", value: 175 }
];

export const MOCK_HOSPITALS: Hospital[] = [
  { id: "h1", name: "AIIMS Delhi", location: "New Delhi", verified: true, status: "Verified", licenseId: "DEL-MED-992", aiFlag: false },
  { id: "h2", name: "Apollo Hospitals Chennai", location: "Chennai, TN", verified: false, status: "Pending", licenseId: "TN-MED-101", aiFlag: true },
  { id: "h3", name: "Fortis Hospital Mumbai", location: "Mumbai, MH", verified: true, status: "Verified", licenseId: "MH-HLT-445", aiFlag: false },
  { id: "h4", name: "Manipal Hospital Bengaluru", location: "Bengaluru, KA", verified: false, status: "Suspended", licenseId: "KA-CAR-888", aiFlag: true }
];

export const MOCK_DISPUTES: Dispute[] = [
  { id: "d1", recordTitle: "Knee Surgery Bill", patientName: "Ravi Kumar", hospitalName: "Fortis Hospital Mumbai", status: "Pending Review", aiSuggestion: "Possible Overcharge" },
  { id: "d2", recordTitle: "MRI Scan Report", patientName: "Priya Sharma", hospitalName: "AIIMS Delhi", status: "Pending Review", aiSuggestion: "Needs Verification" },
  { id: "d3", recordTitle: "Prescription #4482", patientName: "Vikas Gupta", hospitalName: "Apollo Hospitals Chennai", status: "Resolved", aiSuggestion: "Likely Valid" }
];

export const MOCK_AUDIT_LOGS: AuditLog[] = [
  { id: "l1", action: "Record Access", performedBy: "Dr. R. Menon", target: "Patient #1423", date: "2024-04-19 11:20 AM", result: "Secure" },
  { id: "l2", action: "Hospital Verification", performedBy: "Admin System", target: "Apollo Chennai", date: "2024-04-18 08:15 PM", result: "Failed Attempt" },
  { id: "l3", action: "Data Backup", performedBy: "System Job", target: "Database", date: "2024-04-18 02:00 AM", result: "Secure" },
  { id: "l4", action: "Login Attempt", performedBy: "Unknown IP", target: "Admin Panel", date: "2024-04-17 09:32 PM", result: "Restricted Attempt" }
];

export const MOCK_REMINDERS: Reminder[] = [
  { id: "r1", title: "Atorvastatin (Cholesterol)", type: "MEDICINE", time: "07:30 AM", frequency: "Daily", duration: "30 Days", status: "ONGOING", aiSuggested: true },
  { id: "r2", title: "Vitamin D3", type: "MEDICINE", time: "09:00 PM", frequency: "Weekly", duration: "6 Months", status: "REFILL_NEEDED" },
  { id: "r3", title: "Cardiac Review", type: "CHECKUP", date: "2024-05-10", time: "11:30 AM", status: "UPCOMING", aiSuggested: true }
];

export const MOCK_PATIENT_PROFILE: PatientProfile = {
  id: "u1",
  name: "Ravi Kumar",
  email: "ravi.kumar@example.in",
  phone: "+91 98765 43210",
  dob: "1978-02-14",
  gender: "Male",
  bloodGroup: "B+",
  address: "D-44, Rohini Sector 7, Delhi",
  emergencyContact: {
    name: "Sushma Kumar (Wife)",
    phone: "+91 87654 32109"
  },
  avatar: "https://picsum.photos/100/100?random=150",
  stats: {
    totalRecords: 58,
    approvedRecords: 50,
    hospitalsVisited: 6
  }
};

export const MOCK_HOSPITAL_PROFILE: HospitalProfile = {
  id: "h1",
  name: "AIIMS Delhi",
  licenseId: "DEL-MED-992-A",
  email: "admin@aiims.org.in",
  phone: "+91 99117 22334",
  address: "Ansari Nagar, New Delhi, 110029",
  specialization: ["Cardiology", "Neurology", "Emergency Medicine"],
  description:
    "India's premier government healthcare institution offering affordable and top-class treatment.",
  website: "https://www.aiims.edu",
  avatar: "https://picsum.photos/150/150?random=160",
  banner: "https://picsum.photos/1200/300?random=161",
  stats: {
    totalPatients: 32800,
    recordsUploaded: 184200,
    doctorsCount: 1220
  }
};

export const MOCK_BILLS: Bill[] = [
  { id: "b1", patientName: "Ravi Kumar", date: "2024-03-22", amount: 3500.0, status: "PAID", service: "Blood Test" },
  { id: "b2", patientName: "Priya Sharma", date: "2024-03-25", amount: 8500.0, status: "PENDING", service: "MRI Scan" },
  { id: "b3", patientName: "Asha Verma", date: "2024-04-02", amount: 45000.0, status: "OVERDUE", service: "Knee Surgery Advance" },
  { id: "b4", patientName: "Rahul Mehta", date: "2024-04-08", amount: 500.0, status: "PAID", service: "ECG Report" }
];

export const MOCK_REPORTS: Report[] = [
  { id: "rep-1", title: "Monthly Patient Footfall", date: "2024-03-01", type: "Monthly", status: "Ready" },
  { id: "rep-2", title: "Annual Health Spend Report", date: "2024-01-01", type: "Annual", status: "Ready" },
  { id: "rep-3", title: "Compliance & Security Log", date: "2024-04-15", type: "Audit", status: "Generating" }
];

export const DEFAULT_USER = {
  id: "u1",
  name: "Ravi Kumar",
  email: "ravi.kumar@example.in",
  role: UserRole.PATIENT,
  avatar: "https://picsum.photos/100/100?random=150"
};
