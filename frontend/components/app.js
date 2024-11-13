export default {
  template: `
    <header class="text-center py-10 mt-10">
      <h1 class="text-xl">System Monitor 📊</h1>
      <p class="text-gray-500">{{ greet }}</p>
    </header>

    <main class="flex flex-col gap-4 items-center">
      
    </main>
  `,

  data() {
    return {
      greet: "Hello there, Let's this the dashboard of your system",
    };
  },
};
