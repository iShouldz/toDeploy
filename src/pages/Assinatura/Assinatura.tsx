import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IAssinatura } from "@/interfaces/assinatura";
import { setTierAccount } from "@/store/user-slice";
import { CheckIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useUserSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";

const Assinatura = () => {
  const user = useUserSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const planos: IAssinatura[] = [
    {
      title: "Plano Free",
      description:
        "Não tem certeza se deseja aquirir? Não tem problema. Por que não experimenta?",
      value: "0.00/mês",
      items: [
        "Acesso ao sistema",
        "Cadastre pacientes*",
        "Cadastre serviços*",
        "Agende consultas*",
      ],
      details: "Cadastros e agendamentos limitados*",
      tier: "free",
    },
    {
      title: "Plano Standard",
      description:
        "Ideal para quem não precisa de algo tão robusto mas ainda sim eficiente",
      value: "30.00/mês",
      items: [
        "Acesso ao sistema",
        "Cadastre pacientes",
        "Cadastre serviços",
        "Cadastre funcionarios",
        "Agende consultas",
        "Multiplos usuarios",
      ],
      tier: "standard",
    },

    {
      title: "Plano Enterprise",
      description:
        "Ideal para quem entende que o gerenciamento do seu negocio deve vir em primeiro lugar ",
      value: "45.00/mês",
      items: [
        "Acesso ao sistema",
        "Cadastre pacientes",
        "Cadastre serviços",
        "Cadastre funcionarios",
        "Agende consultas",
        "Multiplos usuarios",
        "Painel financeiro",
        "Gerenciamento de estoque",
        "Gerenciamento de vendas",
      ],
      tier: "enterprise",
    },
  ];

  return (
    <section className="flex items-center flex-col justify-center gap-8 mt-11 overflow-y-auto">
      <motion.h1
        className={`text-3xl font-bold ${user.isDarkMode && "text-white"}`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Olá, estamos felizes que você está aqui. Vamos começar uma nova
        experiência no seu negócio.
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:h-full p-2 pb-10">
        {planos.map((plano) => (
          <Card
            className={`bg-background shadow-lg max-w-[440px] ${
              user.isDarkMode && "dark"
            } `}
            style={{
              boxShadow:
                plano.tier === user.tier && "0 4px 30px rgba(78, 186, 157, 1)",
            }}
          >
            <CardHeader className="flex flex-col items-start justify-between p-6">
              <div className="flex flex-col  gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{plano.title}</h3>
                  {plano.tier === user.tier && <Badge>Plano atual</Badge>}
                </div>

                <p className="text-sm text-muted-foreground">
                  {plano.description}
                </p>
              </div>
              <div className="text-3xl font-bold text-primary">
                ${plano.value}
              </div>
            </CardHeader>
            <CardContent className="p-6 border-t min-h-[350px]">
              <div className="grid gap-2">
                {plano.items.map((item) => (
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <p className="text-xs mt-3">{plano.details}</p>
              <Button
                variant="outline"
                className={`w-full relative bottom-0 ${
                  !plano.details && "mt-4"
                }`}
                onClick={() => {
                  dispatch(setTierAccount(plano.tier));
                  navigate("/dashboard/listagemClinica");
                }}
              >
                Assinar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Assinatura;