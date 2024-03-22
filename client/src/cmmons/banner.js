import React from "react";
import { Alert } from "antd";

const Banner = () => {
  return (
    <Alert
      message="تنبيه هام"
      description="تطبيق أيجيني هو أول تطبيق تونسي يقدم خدمات التأشيرة عبر الهاتف الجوال. تمتع بتجربة ممتازة واحصل على تأشيرتك بسهولة وسرعة."
      type="warning"
      showIcon
      closable
      style={{ marginBottom: "20px" }}
    />
  );
};

export default Banner;