export const MENUITEMS: any = [
  {
    menutitle: "Main",

    Items: [
      {
        title: "Dashboards",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Home</title>
            <path
              d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,

        children: [
          {
            path: `${import.meta.env.BASE_URL}dashboard/index`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "General",
          },
        ],
      },
    ],
  },


  {
    menutitle: "PAGES",
    Items: [
      {
        title: "Pages",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Pages</title>
            <rect
              x="128"
              y="128"
              width="336"
              height="336"
              rx="57"
              ry="57"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}pages/widgets`,
            title: "Widgets",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
        ],
      },
    ],
  },
];
