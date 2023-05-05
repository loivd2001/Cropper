import moment from "moment";
import { mapState } from "pinia";
import { authStore } from "@/store";

export default {
  computed: {
    ...mapState(authStore, ["dataAuthMe"]),

    gbIsExpired() {
      let check = false;
      if (this.dataAuthMe?.company) {
        const { alertError, stop_using } = this.dataAuthMe.company;
        const { expired, card_null } = alertError;
        check = stop_using || expired || card_null;
      }
      return check;
    },
  },

  methods: {
    convertDateToString(date, formatString = "YYYY/MM/DD HH:mm") {
      if (!date) {
        return "";
      }
      if(typeof(date) === "string") return date;
      return moment(date?._seconds * 1000).format(formatString);
    },

    thousandComma(number, withStyle = false) {
      if (!number) {
        return 0;
      }

      return typeof number === 'number'
        ? number.toLocaleString('ja-JP', {
          style: withStyle ? 'currency' : undefined,
          currency: 'JPY',
        })
        : null;
    },
  },
}
