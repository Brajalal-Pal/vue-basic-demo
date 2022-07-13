export default {
  data() {
    return {
      employees: null,
    };
  },
  created() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => (this.employees = data.results[0]));
  },
};
