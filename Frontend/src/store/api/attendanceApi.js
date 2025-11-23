import { apiSlice } from "./apiSlice";

export const attendanceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAttendanceByDate: builder.query({
      query: (date) => `/api/attendance?date=${date}`,
      providesTags: ["Attendance"],
    }),

    saveBulkAttendance: builder.mutation({
      query: (data) => ({
        url: "/api/attendance/bulk",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Attendance"],
    }),
  }),
});

export const { useGetAttendanceByDateQuery, useSaveBulkAttendanceMutation } =
  attendanceApi;
