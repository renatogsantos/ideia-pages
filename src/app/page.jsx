import MainAccordion from "@/components/Accordion";
import CardComments from "@/components/CardComments";
import CardPrice from "@/components/CardPrice";
import MainNavbar from "@/components/Navbar";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function Home() {
  return (
    <></>
    // <>
    //   <MainNavbar />

    //   <section className="mx-2">
    //     <div className="container mx-auto my-4 rounded-3xl bg-home-pages-cidades">
    //       <div className="p-6 lg:p-16 lg:w-2/3">
    //         <h1 className="mb-4 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
    //           Compre ou renove seu Certificado Digital em
    //           <br />
    //           <span className="text-green-200">São Paulo</span>
    //         </h1>
    //         <p className="mb-8 text-lg font-bold">
    //           Rapidez, segurança e atendimento de qualidade você só encontra
    //           aqui.
    //         </p>
    //         <div className="flex flex-col lg:flex-row gap-4">
    //           <Button
    //             size="lg"
    //             className="bg-gradient-to-r from-green-200 to-green-300 text-white w-fit"
    //           >
    //             Adquirir certificado
    //           </Button>
    //           <Button
    //             size="lg"
    //             color="primary"
    //             variant="faded"
    //             className="w-fit"
    //           >
    //             Fale com um especialista
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-24">
    //       <h2 className="mb-4 text-2xl lg:text-5xl text-center my-12 font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
    //         Certificação com os melhores valores você encontra aqui
    //       </h2>
    //       <p className="text-center">
    //         Certificado emitido por videoconferência, compre e agenda hoje
    //         mesmo!
    //       </p>
    //       <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mx-auto mt-6">
    //         <CardPrice />
    //         <CardPrice />
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-12">
    //       <h2 className="mb-4 text-2xl lg:text-5xl text-center font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
    //         Na Rede Ideia você pode confiar
    //       </h2>
    //       <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
    //         <span className="font-bold">São mais de 800 avaliações</span>
    //         <img
    //           src="/imgs/google.svg"
    //           alt="Avaliações do google"
    //           width="190"
    //           height="auto"
    //         />
    //         <div className="flex flex-col">
    //           <span className="font-bold text-green-200">
    //             Temos uma avaliação de
    //           </span>
    //           <span className="font-bold">4,9 de 5,0 no Google</span>
    //         </div>
    //       </div>
    //       <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
    //         <CardComments
    //           image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    //           user="Renato G Santos"
    //           description="Duis amet velit est adipisicing labore reprehenderit amet consequat adipisicing labore dolor nulla. Nulla ullamco exercitation adipisicing reprehenderit do amet ut culpa. Mollit qui adipisicing officia aliquip. Pariatur et irure laboris amet duis mollit adipisicing cillum magna elit ut."
    //         />
    //         <CardComments
    //           image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    //           user="Renato G Santos"
    //           description="Duis amet velit est adipisicing labore reprehenderit amet consequat adipisicing labore dolor nulla. Nulla ullamco exercitation adipisicing reprehenderit do amet ut culpa. Mollit qui adipisicing officia aliquip. Pariatur et irure laboris amet duis mollit adipisicing cillum magna elit ut."
    //         />
    //         <CardComments
    //           image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    //           user="Renato G Santos"
    //           description="Duis amet velit est adipisicing labore reprehenderit amet consequat adipisicing labore dolor nulla. Nulla ullamco exercitation adipisicing reprehenderit do amet ut culpa. Mollit qui adipisicing officia aliquip. Pariatur et irure laboris amet duis mollit adipisicing cillum magna elit ut."
    //         />
    //         <CardComments
    //           image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    //           user="Renato G Santos"
    //           description="Duis amet velit est adipisicing labore reprehenderit amet consequat adipisicing labore dolor nulla. Nulla ullamco exercitation adipisicing reprehenderit do amet ut culpa. Mollit qui adipisicing officia aliquip. Pariatur et irure laboris amet duis mollit adipisicing cillum magna elit ut."
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-12 bg-gray-100 p-6 lg:p-12 rounded-3xl">
    //       <h2 className="mb-4 text-2xl lg:text-5xl text-center font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
    //         Seu certificado digital ICP-Brasil emitido em poucos minutos
    //       </h2>
    //       <p className="text-green-200 text-center font-bold">
    //         Aqui, você encontra a solução completa para a emissão do seu
    //         Certificado Digital! <br /> Seja e-CNPJ ou e-CPF com todo o conforto
    //         e segurança que a tecnologia moderna pode oferecer
    //       </p>
    //       <div className="flex flex-col lg:flex-row items-center gap-4 mt-12">
    //         <div className="lg:w-1/3">
    //           <img
    //             src="/imgs/card.png"
    //             alt="Mulher sentada na mesa em frente ao computador sorrindo"
    //             width="100%"
    //             height="auto"
    //             className="rounded-3xl"
    //           />
    //         </div>
    //         <div className="lg:w-2/3">
    //           <p className="font-medium mb-2">
    //             Compreendemos a importância do seu tempo e, por isso,
    //             apresentamos nosso serviço exclusivo de emissão de certificados
    //             digitais através de videoconferência. Agora, você pode concluir
    //             todo o processo sem sair do conforto do seu escritório ou
    //             residência.
    //           </p>
    //           <p className="font-medium mb-2">
    //             Nossa plataforma de emissão é altamente segura e adere
    //             rigorosamente a todos os protocolos de segurança. Isso assegura
    //             não apenas a validade jurídica do seu certificado, mas também a
    //             integridade do processo como um todo.
    //           </p>
    //           <p className="font-medium mb-2">
    //             Ao escolher nossos serviços, você se beneficia não apenas da
    //             comodidade, mas também da confiança em um sistema robusto que
    //             prioriza a proteção dos seus dados e a conformidade com as
    //             normativas legais. Simplificamos o processo de obtenção de
    //             certificados digitais para garantir uma experiência eficiente e
    //             segura, sem comprometer a qualidade ou a segurança do seu
    //             documento.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-12">
    //       <h2 className="mb-4 text-2xl lg:text-5xl text-center my-12 font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
    //         Dúvidas sobre o Certificado Digital?
    //       </h2>
    //       <p className="text-green-200 text-center font-bold">
    //         Aqui você encontra o passo a passo para chegar até o certificado
    //         digital ideal para sua necessidade.
    //       </p>
    //       <div className="mt-12">
    //         <MainAccordion />
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-12 p-12 rounded-3xl ideia-page-hero-1">
    //       <div className="flex flex-col gap-6">
    //         <h2 className="mb-4 text-2xl lg:text-5xl font-extrabold">
    //           Seu certificado digital
    //           <br /> em poucos cliques!
    //         </h2>
    //         <p className="font-medium">
    //           Certificado e-CPF e e-CNPJ Padrão ICP-Brasil
    //           <br /> com atendimento personalizado e humanizado.
    //         </p>
    //         <Button
    //           size="lg"
    //           color="primary"
    //           className="bg-gradient-to-r from-green-200 to-green-300 text-white w-fit"
    //         >
    //           Fale com um especialista
    //         </Button>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-24">
    //       <h2 className="mb-4 text-2xl lg:text-5xl font-extrabold text-center">
    //         Seu certificado digital em{" "}
    //         <span className="text-green-200">São Paulo</span>
    //       </h2>
    //       <p className="text-green-200 text-center font-bold">
    //         Aqui você encontra o passo a passo para chegar até o certificado
    //         digital ideal para sua necessidade.
    //       </p>
    //       <p className="font-medium text-center">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
    //         quis explicabo reprehenderit perspiciatis sapiente ad eveniet cum
    //         veritatis enim vitae, ab ut, repudiandae vel eligendi magni
    //         exercitationem deleniti similique nam nihil officia tempore placeat
    //         quasi! Velit quo vitae consequuntur alias provident porro, corporis
    //         recusandae praesentium laborum eligendi possimus at, ullam rem
    //         natus, eum et excepturi eos sapiente odio error deleniti voluptate
    //         voluptas non magnam! Inventore perferendis numquam atque eveniet est
    //         at impedit optio commodi, ab delectus voluptatum ipsam alias ea
    //         autem sapiente nam odio nesciunt perspiciatis aperiam molestiae
    //         culpa. Nostrum tempore, alias aperiam doloribus consequuntur
    //         cupiditate cum sapiente hic, reiciendis repellat quam iure sit
    //         earum. Dolorem magnam magni assumenda totam adipisci velit. Placeat,
    //         eos sit. Odio nam fuga explicabo fugiat?
    //       </p>
    //     </div>
    //   </section>

    //   <section className="mx-2">
    //     <div className="container mx-auto my-12">
    //       <div className="p-12 bg-gray-100 rounded-3xl">
    //         <h2 className="mb-4 text-2xl lg:text-5xl font-extrabold text-center">
    //           Quero saber mais sobre a Certificação Digital
    //         </h2>
    //         <p className="text-green-200 text-center font-bold">
    //           Entre em contato com um atendente e conheça todos os benefícios do
    //           certificado digital
    //         </p>
    //         <form>
    //           <div className="flex flex-col gap-4 mt-4">
    //             <Input
    //               type="email"
    //               label="Nome completo"
    //               variant="bordered"
    //               color="primary"
    //             />
    //             <Input
    //               type="email"
    //               label="E-mail"
    //               variant="bordered"
    //               color="primary"
    //             />
    //             <Input
    //               type="email"
    //               label="Telefone para contato"
    //               variant="bordered"
    //               color="primary"
    //             />
    //             <Textarea
    //               type="text"
    //               label="Mensagem"
    //               variant="bordered"
    //               color="primary"
    //             />
    //             <Button
    //               size="lg"
    //               className="bg-gradient-to-r from-green-200 to-green-300 text-white"
    //             >
    //               Enviar
    //             </Button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}
