// import i18n from "../i18n";

export const handleGetMessageError = (error) => {
  let message_result = "";
  // const { status } = error.response;
  if (error.response && error.response.data) {
    const { message } = error.response.data;
    // if (status === 402) {
    message_result = message;
    // } else if (status === 422) {
    //   message_result = "Validate Error";
    // }
    // else if (status === 401) {
    //   if (errors.type && errors.label) {
    //     if (errors.type == "incorrect_password") {
    //       message_result = i18n.t("message.incorrect_password");
    //     } else {
    //       message_result = i18n.t(`validation.${errors.type}`, [
    //         i18n.t(`label.${errors.label}`),
    //       ]);
    //     }
    //   } else {
    //     message_result = message;
    //   }
    // }
    // else if (status === 404) {
    //   message_result = message;
    // } else if (status === 500) {
    //   message_result = message;
    // } else if (status === 400) {
    //   message_result = message;
    // }
  }
  return message_result;
};

export const handleGetIsShowMessageError = (error) => {
  let show_message_error = false;
  if (error.response && error.response.data) {
    const { is_show_message } = error.response.data;
    show_message_error = is_show_message;
  }
  return show_message_error;
}
