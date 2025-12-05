"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { responsiveClampCustom } from "../utils/responsive";

interface Event {
  id: string;
  date: Date;
  title: string;
  description?: string;
}

export default function Calendar() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Navigate to events page
  const handleDateClick = () => {
    router.push("/events");
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: responsiveClampCustom(8, 6, 12),
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      {/* Calendar Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: responsiveClampCustom(8, 6, 12),
          paddingBottom: responsiveClampCustom(8, 6, 12),
          borderBottom: `${responsiveClampCustom(1, 0.5, 2)} solid #E5E5E5`,
          flexShrink: 0,
        }}
      >
        <button
          onClick={goToPreviousMonth}
          style={{
            background: "#F5F5F5",
            border: "none",
            fontSize: responsiveClampCustom(40, 32, 48),
            cursor: "pointer",
            color: "#1E2B48",
            fontWeight: "bold",
            padding: `${responsiveClampCustom(8, 6, 12)} ${responsiveClampCustom(16, 12, 20)}`,
            borderRadius: responsiveClampCustom(6, 4, 8),
            transition: "background-color 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E5E5E5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#F5F5F5";
          }}
        >
          ‹
        </button>
        <h3
          style={{
            fontSize: responsiveClampCustom(40, 32, 48),
            fontWeight: "bold",
            color: "#1E2B48",
            margin: 0,
            textAlign: "center",
            flex: "1 1 0",
          }}
        >
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={goToNextMonth}
          style={{
            background: "#F5F5F5",
            border: "none",
            fontSize: responsiveClampCustom(40, 32, 48),
            cursor: "pointer",
            color: "#1E2B48",
            fontWeight: "bold",
            padding: `${responsiveClampCustom(8, 6, 12)} ${responsiveClampCustom(16, 12, 20)}`,
            borderRadius: responsiveClampCustom(6, 4, 8),
            transition: "background-color 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E5E5E5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#F5F5F5";
          }}
        >
          ›
        </button>
      </div>

      {/* Calendar Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: responsiveClampCustom(4, 3, 6),
          width: "100%",
          flex: "1 1 0",
          minHeight: 0,
          alignContent: "start",
        }}
      >
        {/* Day Names */}
        {dayNames.map((day) => (
          <div
            key={day}
            style={{
              textAlign: "center",
              fontSize: responsiveClampCustom(12, 10, 14),
              fontWeight: "bold",
              color: "#48597F",
              padding: responsiveClampCustom(6, 4, 8),
              backgroundColor: "#F8F9FA",
              borderRadius: responsiveClampCustom(4, 3, 6),
              flexShrink: 0,
            }}
          >
            {day}
          </div>
        ))}

        {/* Empty cells for days before month starts */}
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Calendar Days */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const date = new Date(year, month, day);
          const dayEvents = getEventsForDate(date);
          const isToday =
            date.toDateString() === new Date().toDateString();

          return (
            <div
              key={day}
              onClick={handleDateClick}
              style={{
                aspectRatio: "1",
                border: `${responsiveClampCustom(1, 0.5, 2)} solid ${isToday ? "#48597F" : "#E5E5E5"}`,
                borderRadius: responsiveClampCustom(4, 3, 6),
                padding: responsiveClampCustom(2, 1, 3),
                cursor: "pointer",
                backgroundColor: isToday ? "#E3F2FD" : "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                transition: "all 0.2s",
                boxShadow: isToday ? "0 1px 2px rgba(72, 89, 127, 0.2)" : "none",
                minHeight: 0,
                maxWidth: "100%",
                maxHeight: "100%",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (!isToday) {
                  e.currentTarget.style.backgroundColor = "#F8F9FA";
                  e.currentTarget.style.borderColor = "#48597F";
                }
              }}
              onMouseLeave={(e) => {
                if (!isToday) {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#E5E5E5";
                }
              }}
            >
              <span
                style={{
                  fontSize: responsiveClampCustom(20, 16, 24),
                  color: isToday ? "#1E2B48" : "#333333",
                  fontWeight: isToday ? "bold" : "600",
                  lineHeight: "1",
                }}
              >
                {day}
              </span>
              {dayEvents.length > 0 && (
                <div
                  style={{
                    width: responsiveClampCustom(6, 4, 8),
                    height: responsiveClampCustom(6, 4, 8),
                    borderRadius: "50%",
                    backgroundColor: "#840032",
                    marginTop: responsiveClampCustom(2, 1, 3),
                    boxShadow: "0 1px 2px rgba(132, 0, 50, 0.3)",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}

