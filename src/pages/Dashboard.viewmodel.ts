import thumbnail1 from "@trainingsapp/assets/photo-1700819083576-edbdde9e16c5.avif";
import thumbnail2 from "@trainingsapp/assets/photo-1541701494587-cb58502866ab.avif";
import thumbnail3 from "@trainingsapp/assets/photo-1525547719571-a2d4ac8945e2.avif";
import thumbnail4 from "@trainingsapp/assets/photo-1602871109643-efc847799127.webp";
import thumbnail5 from "@trainingsapp/assets/photo-1542393545-10f5cde2c810.webp";

export function DashboardViewModel() {
  const titles = [
    "Formation présentiel - Computer Science, les bases",
    "Formation - Computer Science, avancée",
    "Formation - CSS 4, les nouvelles possibilités",
    "Coaching présentiel - React, les bases",
    "Rencontre - Robert Martin, le père du clean code",
  ];

  const ids = [
    "bfa984a9-66c9-4c20-91be-d69d9a6f1923",
    "4dcef045-66f5-4b8f-ba40-2a6f76f1f429",
    "46da46bf-b860-4360-a354-8290d15e9434",
    "bfe2dc45-503c-44a2-af4e-3d9cf004389e",
    "0d56d4f0-6260-4ed4-8ca1-c00dfe518a65",
  ];

  const thumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
  ];

  const generateTrainings = (index: number) => {
    return {
      id: ids[index],
      title: titles[index],
      thumbnail: {
        url: thumbnails[index]
      }
    };
  };

  const trainings = [...new Array(5)].map((_, index) =>
    generateTrainings(index)
  );

  return {
    trainings
  };
}
