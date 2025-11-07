import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Appointment {
  id: string;
  therapistId: string;
  therapistName: string;
  childName: string;
  date: string;
  time: string;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

interface AppointmentState {
  appointments: Appointment[];
  selectedDate: string | null;
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    therapistId: 't1',
    therapistName: 'Dr. Sarah Johnson',
    childName: 'Emma',
    date: '2024-11-15',
    time: '10:00 AM',
    type: 'Speech Therapy',
    status: 'scheduled',
  },
  {
    id: '2',
    therapistId: 't2',
    therapistName: 'Dr. Michael Chen',
    childName: 'Emma',
    date: '2024-11-18',
    time: '2:00 PM',
    type: 'Occupational Therapy',
    status: 'scheduled',
  },
];

const initialState: AppointmentState = {
  appointments: mockAppointments,
  selectedDate: null,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    cancelAppointment: (state, action: PayloadAction<string>) => {
      const appointment = state.appointments.find(a => a.id === action.payload);
      if (appointment) {
        appointment.status = 'cancelled';
      }
    },
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { addAppointment, cancelAppointment, setSelectedDate } = appointmentSlice.actions;
export default appointmentSlice.reducer;
