import { format } from "date-fns";

export const formatShortDate = (value: string | Date) =>
  format(new Date(value), "dd MMM yyyy");

export const formatDateTime = (value: string | Date) =>
  format(new Date(value), "dd MMM, hh:mm a");
