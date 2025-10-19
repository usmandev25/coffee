import { useForm } from "react-hook-form";
import "./ClientData.scss";
import type { IClientData } from "../../types/types";
import { useClient, useCoffee } from "../../hooks/useOrderCoffee/useCoffee";
import { useState } from "react";
const ClientData = () => {
  const { register, handleSubmit, reset } = useForm<IClientData>();
  const { pushClientData, client } = useClient();
  const { modal } = useCoffee();
  console.log(modal, "modal");

  const [mainModal, setMainModal] = useState<boolean>(false);
  const handleData = (data: IClientData) => {
    pushClientData(data);
    reset();
    setMainModal(true);
  };
  return (
    <form onSubmit={handleSubmit(handleData)}>
      <div id="clientData">
        {mainModal ? (
          <div className="clientData--modal__block">
            <div className="clientData--modal__block--data">
              <div className="clientData--modal__block--data__text">
                <h1>name: {client.slice(-1).map((el) => el.name)}</h1>
                <h1>number: {client.slice(-1).map((el) => el.number)}</h1>
              </div>
              <div className="clientData--modal__block--data__adress">
                <h1>city: {client.slice(-1).map((el) => el.city)}</h1>
                <h1>adress: {client.slice(-1).map((el) => el.adress)}</h1>
              </div>
            </div>
            <div className="clientData--modal__block--title">
                {modal.map((el) => (
                  <div className="clientData--modal__block--title__text">
                    <h1>{el.title} :</h1>
                    <h1>{el.price}som</h1>
                  </div>
                ))}{" "}
            </div>
            <button onClick={() => setMainModal(false)}>close</button>
          </div>
        ) : (
          <div className="container">
            <div className="clientData">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Client Name"
              />
              <input
                {...register("number", { required: true, valueAsNumber: true })}
                type="number"
                placeholder="Client Number"
              />
              <input
                {...register("card", {
                  required: true,
                  minLength: {
                    value: 12,
                    message: "min length 12 letter",
                  },
                })}
                type="text"
                placeholder="Client Card Number"
              />
              <input
                {...register("city", { required: true })}
                type="text"
                placeholder="city"
              />
              <input
                {...register("adress", { required: true })}
                type="text"
                placeholder="Adress of Client"
              />
              <input
                {...register("code", {
                  required: true,
                  valueAsNumber: true,
                  minLength: 3,
                  min: 100,
                })}
                type="number"
                placeholder="3 code on the back of the card"
              />
              <button type="submit">order</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ClientData;
