export const getGreeting = (hour) => {
  if (hour !== undefined && hour >= 0 && hour < 5) {
    return {
      emoji: "🌙",
      title: "Sleep Well",
      subtitle: "It's midnight",
    };
  }

  if (hour !== undefined && hour >= 5 && hour < 7) {
    return {
      emoji: "🌅",
      title: "Rise & Shine",
      subtitle: "Early Morning",
    };
  }

  if (hour !== undefined && hour >= 7 && hour < 12) {
    return {
      emoji: "☀️",
      title: "Good Morning",
      subtitle: "Hope you have a productive day!",
    };
  }

  if (hour !== undefined && hour >= 12 && hour < 16) {
    return {
      emoji: "🌤️",
      title: "Good Afternoon",
      subtitle: "Keep up the great work!",
    };
  }

  if (hour !== undefined && hour >= 16 && hour < 19) {
    return {
      emoji: "🌇",
      title: "Good Evening",
      subtitle: "Time to relax.",
    };
  }

  return {
    emoji: "🌌",
    title: "Good Night",
    subtitle: "Have a peaceful evening.",
  };
};
