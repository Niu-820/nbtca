const pageConfig = {
  title: "nbtca's Status Page",
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: '15955434043@163.con', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'nbtca.space',
      name: 'nbtca.space',
      method: 'GET',
      target: 'https://nbtca.space',
      tooltip: '监控nbtca.space',
      statusPageLink: 'https://nbtca.space',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'webhook.nbtca.space',
      name: 'webhook.nbtca.space',
      method: 'GET',
      target: 'https://webhook.nbtca.space/',
      tooltip: '监控webhook.nbtca.space',
      statusPageLink: 'https://webhook.nbtca.space/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'nbtca.link',
      name: 'nbtca.link',
      method: 'GET',
      target: 'https://nbtca.link/',
      tooltip: '监控nbtca.link',
      statusPageLink: 'https://nbtca.link/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'mc.nbtca.space',
      name: 'mc.nbtca.space',
      target: 'mc.nbtca.space',  // 目标地址
      port: 25565,  // Minecraft的默认端口
      tooltip: '监控 mc.nbtca.space 的TCP端口',
      statusPageLink: 'https://mc.nbtca.space',
      timeout: 10000,  // 设置一个合理的超时时间
    },
  ],
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
