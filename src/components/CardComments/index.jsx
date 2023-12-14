import { User } from "@nextui-org/react";

export default function CardComments({ image, user, description }) {
  return (
    <>
      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl">
        <User
          name={user}
          description="Avaliações do Google"
          avatarProps={{ src: image }}
        />
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
}
