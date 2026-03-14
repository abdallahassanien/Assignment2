interface Course {
  id: number;
  title: string;
}

interface UserData {
  id: number;
  name: string;
  role: string;
  email: string;
  isActive: boolean;
  courses: Course[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: UserData;
}

const response: ApiResponse = {
  success: true,
  message: "User retrieved successfully",
  data: {
    id: 1,
    name: "Malak Ahmed",
    role: "mentor",
    email: "malak@example.com",
    isActive: true,
    courses: [
      { id: 11, title: "JavaScript Basics" },
      { id: 12, title: "TypeScript Intro" }
    ]
  }
};