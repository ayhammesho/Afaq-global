"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [thereError, setThereIsError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [value, setValue] = useState();
  const t = useTranslations("default");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //  const NewData = {...data,Subject}
    setIsLoading(true);
    const url = `http://68.183.74.28:1337/api/contact-uses`;

    const res = await fetch(url, {
      cache: "no-cache",
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    console.log(res);
    if (res.status !== 200) {
      setIsLoading(false); // <--
      setThereIsError("Something went wrong");
    } else {
      setIsLoading(false); // <-- Here
      setIsSuccessful(true);
    }
    reset();
  };

  return (
    <div className="inquiry-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-inner mb-30">
              <label>{t("Contact.fullName")}*</label>
              <input
                type="text"
                placeholder="Jackson Mile"
                {...register("Name", {
                  required: "This Filed is Required",
                  minLength: {
                    value: 3,
                    message: "The name should at least 3 characters long",
                  },
                })}
              />
              {errors.Name && (
                <p className="font-bold text-red-500" role="alert">
                  {errors.Name.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner mb-30">
              <label>{t("Contact.phonenumber")}</label>
              <PhoneInput
                placeholder="Ex- +880-13* ** ***"
                // value={value}
                {...register("Phone", {
                  pattern: {
                    value: /^\+?[0-9]\d{1,20}$/,
                    message: "your phone number should be like +21 999 999 999",
                  },
                })}
                onChange={setValue}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-inner mb-30">
              <label>
                {t("Contact.Email")} <span>( {t("Contact.optional")})</span>
              </label>
              <input
                type="email"
                placeholder="Ex- info@example.com"
                {...register("Email", {
                  required: "This Filed is Required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "your email should be like info@example.com",
                  },
                })}
              />
              {errors.Email && (
                <p className="font-bold text-red-500" role="alert">
                  {errors.Email.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-inner mb-30">
              <label> {t("Contact.subject")}*</label>
              <input
                type="text"
                placeholder="Subject"
                {...register("Subject", { required: "This Filed is Required" })}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-inner mb-30">
              <label> {t("Contact.message")}*</label>
              <textarea
                placeholder="Write Something..."
                defaultValue={""}
                {...register("Message", { required: "This Filed is Required" })}
              />
              {errors.Message && (
                <p className="text-red-500" role="alert">
                  {errors.Message.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-12">
              <div className="form-inner">
                <button
                  type="submit"
                  className="primary-btn3"
                  disabled={isLoading}
                >
                  {t("Contact.submit")}
                </button>
              </div>
            </div>
            <div className="mt-4">
              {thereError && (
                <p className="font-bold text-red-500">{thereError}</p>
              )}
              {isSuccessful && (
                <p className=" font-bold text-green-500">{t("Contact.send")}</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
