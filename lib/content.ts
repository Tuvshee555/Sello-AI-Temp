import { siteConfig } from "./siteConfig";

export type Lang = "mn" | "en";

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  limit: string;
  features: string[];
  popular?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface Content {
  nav: {
    features: string;
    pricing: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    chat: {
      customer1: string;
      bot1: string;
      customer2: string;
      bot2: string;
      typing: string;
    };
  };
  features: {
    heading: string;
    sub: string;
    items: Feature[];
  };
  how: {
    heading: string;
    sub: string;
    steps: Step[];
    note: string;
  };
  pricing: {
    heading: string;
    sub: string;
    popularBadge: string;
    annualNote: string;
    customNote: string;
    cta: string;
    perMonth: string;
    tiers: PricingTier[];
  };
  why: {
    heading: string;
    sub: string;
    points: { title: string; desc: string }[];
    testimonialPlaceholder: string;
  };
  contact: {
    heading: string;
    sub: string;
    messenger: string;
    phone: string;
    email: string;
    facebook: string;
    realPerson: string;
    formTitle: string;
    fields: {
      name: string;
      phone: string;
      shop: string;
      message: string;
    };
    submit: string;
    orDirect: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const content: Record<Lang, Content> = {
  mn: {
    nav: {
      features: "Боломжууд",
      pricing: "Үнэ",
      contact: "Холбоо барих",
      cta: "Холбоо барих",
    },
    hero: {
      badge: "👋 Монгол онлайн дэлгүүрүүдэд зориулсан AI борлуулагч",
      title: "AI борлуулагч таны онлайн дэлгүүрт 24/7 ажиллана",
      subtitle:
        "Facebook Messenger дээр харилцагчдад автоматаар хариулж, бараа танилцуулж, захиалга бүртгэн борлуулалтыг тань нэмэгдүүлнэ.",
      primaryCta: "Үнэгүй зөвлөгөө авах",
      secondaryCta: "Боломжуудыг үзэх",
      chat: {
        customer1: "Сайн байна уу? Энэ цүнх байгаа юу?",
        bot1: "Сайн байна уу! 😊 Тийм ээ, бэлэн байна. Үнэ нь 89,000₮, хүргэлт үнэгүй. Өнгөний сонголт хэрэгтэй юу?",
        customer2: "Хар өнгөтэйг авъя",
        bot2: "Маш сайхан сонголт! 🚀 Захиалгыг тань бүртгэлээ. Утасны дугаараа үлдээгээрэй.",
        typing: "Sello AI бичиж байна…",
      },
    },
    features: {
      heading: "Таны борлуулалтад хэрэгтэй бүх зүйл",
      sub: "Бид өнөөдөр бэлэн хүргэж чадах боломжууд — нэмэлт тохиргоо бид өөрсдөө хийнэ.",
      items: [
        {
          icon: "clock",
          title: "24/7 автомат хариулт",
          desc: "Шөнө дунд ч бай, бот таны оронд харилцагчдад тэр даруй хариулна.",
        },
        {
          icon: "box",
          title: "Бараа бүтээгдэхүүн танилцуулах",
          desc: "Барааны мэдээлэл, зураг, онцлогийг харилцагчид ойлгомжтой танилцуулна.",
        },
        {
          icon: "chat",
          title: "Үнэ, хүргэлт, FAQ",
          desc: "Үнэ, хүргэлт, түгээмэл асуултуудад нэг агшинд тодорхой хариулна.",
        },
        {
          icon: "user-plus",
          title: "Захиалга / лид бүртгэх",
          desc: "Сонирхсон харилцагчийн мэдээллийг бүртгэж, танд шууд мэдэгдэнэ.",
        },
        {
          icon: "language",
          title: "Монголоор жинхэнэ ойлгоно",
          desc: "Монгол хэлээр бичсэн асуултыг жинхэнэ утгаар нь ойлгож, эелдэг харьцана.",
        },
        {
          icon: "settings",
          title: "Custom тохируулга",
          desc: "Таны дэлгүүрийн мэдээлэл, барааны жагсаалт, FAQ-аар ботыг бид өөрсдөө сургана.",
        },
      ],
    },
    how: {
      heading: "Хэрхэн ажилладаг вэ?",
      sub: "Бүх техник талыг бид хийнэ — та зүгээр л борлуулалтаа хүлээж аваарай.",
      steps: [
        {
          num: "1",
          title: "Та бидэнтэй холбогдоно",
          desc: "Messenger, утас эсвэл имэйлээр бидэнд хандаарай. Бид таны хэрэгцээг сонсоно.",
        },
        {
          num: "2",
          title: "Бид ботыг custom тохируулна",
          desc: "Таны дэлгүүрийн мэдээлэл, бараа, FAQ-аар ботыг бид өөрсдөө бэлдэж сургана.",
        },
        {
          num: "3",
          title: "Бот ажиллаж эхэлнэ",
          desc: "Таны Facebook Messenger дээр бот идэвхжиж, харилцагчдад хариулж эхэлнэ.",
        },
      ],
      note: "Танд код бичих, тохиргоо хийх шаардлагагүй. Бүгдийг бид хариуцна.",
    },
    pricing: {
      heading: "Танд тохирох багц",
      sub: "Бүх багц нь custom тохиргоо болон хүний дэмжлэгтэй. Захиалга бид өөрсдөө хийнэ.",
      popularBadge: "Хамгийн эрэлттэй",
      annualNote: `Жилээр төлвөл ~${siteConfig.annualDiscountPercent}% хэмнэнэ`,
      customNote: "Custom хэрэгцээ? Бидэнтэй ярилцаарай.",
      cta: "Сонгох",
      perMonth: "/сар",
      tiers: [
        {
          name: "Үнэгүй",
          price: "0₮",
          period: "/сар",
          limit: "25 харилцагч/сар",
          features: ["1 суваг (Messenger)", "Үндсэн автомат хариулт", "Лид бүртгэл"],
        },
        {
          name: "Стартер",
          price: "49,000₮",
          period: "/сар",
          limit: "250 харилцагч/сар",
          features: ["Messenger суваг", "Бараа танилцуулга", "Лид бүртгэл + мэдэгдэл"],
        },
        {
          name: "Өсөлт",
          price: "69,000₮",
          period: "/сар",
          limit: "800 харилцагч/сар",
          features: ["Бүх Стартер боломж", "Дэвшилтэт FAQ сургалт", "Тэргүүлэх дэмжлэг"],
          popular: true,
        },
        {
          name: "Бизнес",
          price: "99,000₮",
          period: "/сар",
          limit: "2,500 харилцагч/сар",
          features: ["Бүх Өсөлт боломж", "Өргөтгөсөн барааны жагсаалт", "Тусгай тохиргоо"],
        },
        {
          name: "Про",
          price: "249,000₮",
          period: "/сар",
          limit: "7,500 харилцагч/сар",
          features: ["Бүх Бизнес боломж", "Өндөр ачааллын дэмжлэг", "Нэн тэргүүний туслалцаа"],
        },
        {
          name: "Энтерпрайз",
          price: "449,000₮",
          period: "/сар",
          limit: "25,000 харилцагч/сар",
          features: ["Бүх Про боломж", "Тусгай шийдэл", "Зориулалтын менежер"],
        },
      ],
    },
    why: {
      heading: "Яагаад Sello AI гэж?",
      sub: "Монгол дэлгүүрүүдэд зориулж, монголоор бодож хийсэн.",
      points: [
        {
          title: "Монгол дэлгүүрүүдэд зориулсан",
          desc: "Монголын онлайн худалдааны онцлогийг ойлгож бүтээсэн.",
        },
        {
          title: "Монголоор жинхэнэ ойлгоно",
          desc: "Зөвхөн орчуулга биш — монгол хэлээр утга учрыг нь ойлгож харьцана.",
        },
        {
          title: "Жинхэнэ хүний дэмжлэг",
          desc: "Асуудал гарвал жинхэнэ хүн тантай ярьж, тусална.",
        },
        {
          title: "Тохиргоог бид хийнэ",
          desc: "Custom тохируулга үнэд багтсан — та толгойгоо өвтгөх шаардлагагүй.",
        },
      ],
      testimonialPlaceholder:
        "[ Энд хэрэглэгчийн сэтгэгдэл орох болно — удахгүй ]",
    },
    contact: {
      heading: "Эхлэхэд бэлэн үү? Бидэнтэй холбогдоорой",
      sub: "Доорх сувгуудаар бидэнд хандаарай — жинхэнэ хүн тантай хариулж ярилцана.",
      messenger: "Messenger-ээр бичих",
      phone: "Залгах",
      email: "Имэйл бичих",
      facebook: "Facebook хуудас",
      realPerson: "✅ Жинхэнэ хүн ихэвчлэн 1 цагийн дотор хариулна.",
      formTitle: "Эсвэл мессеж үлдээгээрэй",
      fields: {
        name: "Нэр",
        phone: "Утасны дугаар",
        shop: "Дэлгүүрийн нэр",
        message: "Таны мессеж",
      },
      submit: "Илгээх",
      orDirect: "эсвэл шууд холбогдох:",
    },
    footer: {
      tagline: "Монгол онлайн дэлгүүрүүдэд зориулсан AI борлуулагч.",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
    },
  },

  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Contact us",
    },
    hero: {
      badge: "👋 An AI sales rep for Mongolian online shops",
      title: "An AI sales rep that works in your online shop 24/7",
      subtitle:
        "Automatically answers customers on Facebook Messenger, presents your products, captures orders, and grows your sales.",
      primaryCta: "Get a free consultation",
      secondaryCta: "See features",
      chat: {
        customer1: "Hi! Do you have this bag in stock?",
        bot1: "Hello! 😊 Yes, it's available. It's 89,000₮ with free delivery. Would you like to pick a color?",
        customer2: "I'll take the black one",
        bot2: "Great choice! 🚀 I've noted your order. Please leave your phone number.",
        typing: "Sello AI is typing…",
      },
    },
    features: {
      heading: "Everything you need to sell more",
      sub: "What we can deliver for you today — we handle all the setup ourselves.",
      items: [
        {
          icon: "clock",
          title: "24/7 automatic replies",
          desc: "Even at midnight, the bot answers your customers instantly on your behalf.",
        },
        {
          icon: "box",
          title: "Product showcase",
          desc: "Presents product details, images and highlights clearly to your customers.",
        },
        {
          icon: "chat",
          title: "Price, delivery & FAQ",
          desc: "Answers prices, delivery and common questions clearly in an instant.",
        },
        {
          icon: "user-plus",
          title: "Capture orders / leads",
          desc: "Records interested customers' details and notifies you right away.",
        },
        {
          icon: "language",
          title: "Truly understands Mongolian",
          desc: "Understands questions written in Mongolian by meaning, and replies politely.",
        },
        {
          icon: "settings",
          title: "Custom setup",
          desc: "We train the bot ourselves with your shop info, product list and FAQs.",
        },
      ],
    },
    how: {
      heading: "How it works",
      sub: "We handle all the technical work — you just collect the sales.",
      steps: [
        {
          num: "1",
          title: "You contact us",
          desc: "Reach out via Messenger, phone or email. We listen to what you need.",
        },
        {
          num: "2",
          title: "We custom-build your bot",
          desc: "We prepare and train the bot ourselves with your shop info, products and FAQs.",
        },
        {
          num: "3",
          title: "Your bot goes live",
          desc: "The bot activates on your Facebook Messenger and starts answering customers.",
        },
      ],
      note: "No coding or setup needed from you. We take care of everything.",
    },
    pricing: {
      heading: "A plan that fits you",
      sub: "Every plan includes custom setup and real human support. We set it up for you.",
      popularBadge: "Most popular",
      annualNote: `Save ~${siteConfig.annualDiscountPercent}% with annual billing`,
      customNote: "Custom needs? Let's talk.",
      cta: "Choose",
      perMonth: "/mo",
      tiers: [
        {
          name: "Free",
          price: "0₮",
          period: "/mo",
          limit: "25 customers/mo",
          features: ["1 channel (Messenger)", "Basic auto-replies", "Lead capture"],
        },
        {
          name: "Starter",
          price: "49,000₮",
          period: "/mo",
          limit: "250 customers/mo",
          features: ["Messenger channel", "Product showcase", "Lead capture + alerts"],
        },
        {
          name: "Growth",
          price: "69,000₮",
          period: "/mo",
          limit: "800 customers/mo",
          features: ["All Starter features", "Advanced FAQ training", "Priority support"],
          popular: true,
        },
        {
          name: "Business",
          price: "99,000₮",
          period: "/mo",
          limit: "2,500 customers/mo",
          features: ["All Growth features", "Extended product list", "Special configuration"],
        },
        {
          name: "Pro",
          price: "249,000₮",
          period: "/mo",
          limit: "7,500 customers/mo",
          features: ["All Business features", "High-volume support", "Top-priority help"],
        },
        {
          name: "Enterprise",
          price: "449,000₮",
          period: "/mo",
          limit: "25,000 customers/mo",
          features: ["All Pro features", "Custom solution", "Dedicated manager"],
        },
      ],
    },
    why: {
      heading: "Why Sello AI?",
      sub: "Built for Mongolian shops, designed to think in Mongolian.",
      points: [
        {
          title: "Built for Mongolian shops",
          desc: "Designed around how Mongolian online commerce actually works.",
        },
        {
          title: "Truly understands Mongolian",
          desc: "Not just translation — it understands the meaning behind Mongolian text.",
        },
        {
          title: "Real human support",
          desc: "If something comes up, a real person talks to you and helps.",
        },
        {
          title: "We do the setup",
          desc: "Custom setup is included — you don't have to worry about a thing.",
        },
      ],
      testimonialPlaceholder:
        "[ Customer testimonial will go here — coming soon ]",
    },
    contact: {
      heading: "Ready to start? Get in touch",
      sub: "Reach us through any channel below — a real person will reply and talk with you.",
      messenger: "Message on Messenger",
      phone: "Call us",
      email: "Send an email",
      facebook: "Facebook page",
      realPerson: "✅ A real person usually replies within an hour.",
      formTitle: "Or leave a message",
      fields: {
        name: "Name",
        phone: "Phone number",
        shop: "Shop name",
        message: "Your message",
      },
      submit: "Send",
      orDirect: "or reach us directly:",
    },
    footer: {
      tagline: "An AI sales rep for Mongolian online shops.",
      rights: "All rights reserved.",
    },
  },
};
