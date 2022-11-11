const { PrismaClient } = require('@prisma/client');

async function seed() {
  const prisma = new PrismaClient();
  await prisma.recipe.deleteMany();
  await prisma.recipe.create({
    data: {
      id: 'a46e4b41-7497-4bca-b6be-b7e33d0abe7f',
      name: 'Pasta all’amatriciana',
      description: 'Beim klassischen italienischen Gericht – Pasta all’amatriciana – wird in der traditionelle Zubereitung Guanciale (gepökelte Schweinebacke), Tomaten, Pecorino und schwarzer Pfeffer oder etwas scharfe Chili verwendet. In meiner Version zu Hause gebe ich noch Schalotten und Knoblauch hinzu – ich kann ohne diese beiden Zutaten einfach nicht leben – und verwende gepökelten, geschichteten Pancetta und etwas Butter. Gerade bei Tomatensoßen gibt Butter dem Ganzen einen vollen Geschmack und eine seidige Textur. Solltest du noch Bucatini auftreiben können, runden diese das Gericht in perfekter Harmonie ab!',
      image: 'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FRRC2UYmlfYzyP2S-ET8iDenb7eE%3D%2F864x648%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2293-photo-final-1.jpg&w=1440&q=90'
    },
  });
  await prisma.recipe.create({
    data: {
      id: '4dccd672-ed53-4d7d-87ee-03f3bed18454',
      name: 'Herbstsuppe mit gebackenem Butternusskürbis',
      description: 'Diese einfache, aber deftige Herbstsuppe wird dich mit Sicherheit aufwärmen, wenn es draußen kälter wird und die ersten Blätter von den Bäumen fallen. Wenn man Butternusskürbis backt, kommt seine natürliche Süße perfekt zur Geltung. Dieses Rezept ist vegan, aber du kannst natürlich auch Butter oder Sahne dazugeben, die die Suppe noch cremiger machen (für eine noch cremigere vegane Suppe empfehle ich Kokosmilch). Was die Toppings angeht, gebe ich immer gern einen säuerlichen Kontrast zur süßlichen Suppe, z. B. (vegane) saure Sahne. Kürbiskerne oder andere geröstete Nüsse oder Samen sorgen für etwas Biss. Diese Suppe lässt sich wunderbar einfrieren und ist eine gute Basis für vielseitige Gewürzrichtungen – scheue dich also nicht davor, geschmacklich etwas zu experimentieren (z. B. mit Currypulver, Kreuzkümmel oder geräuchertem Paprikapulver).',
      image: 'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FSZLEJY3AUoOnNuBP2eFlhHdTiM4%3D%2F864x648%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2013-photo-final-2.jpg&w=1440&q=90'
    },
  });
  await prisma.recipe.create({
    data: {
      id: '183e0a65-7bcd-41f9-a27a-415e0cfcf6ee',
      name: 'Quinoa-Bowl mit buntem Ofengemüse',
      description: 'Für diese Bowl kannst du so ziemlich jedes Gemüse und Getreide verwenden, das du herumliegen hast, also nutze deine eigenen Vorräte! Anstelle von Karotten und Karottengrün kannst du auch gemischte Bete oder Rüben und Rübengrün nehmen und anderes Gemüse oder verschiedene Nüsse nach deinem Geschmack hinzufügen. Verwende alternativ zu Quinoa auch Reis, Hirse, Graupen oder Gerste. Es kann auch auf einem Salatbett serviert werden oder als eine Beilage nur mit dem gebratenen Gemüse und der Kräuter-Gremolata.',
      image: 'https://www.kitchenstories.com/_next/image?url=https%3A%2F%2Fimages.services.kitchenstories.io%2FkpZqMLKLVP-A-lhgpKAaJgEwRTk%3D%2F864x648%2Fimages.kitchenstories.io%2FwagtailOriginalImages%2FR2525-final-photo-_1.jpg&w=1440&q=90'
    },
  });
}

seed();
