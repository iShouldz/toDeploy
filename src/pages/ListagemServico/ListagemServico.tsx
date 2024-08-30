import { IPet, ITemp } from "@/interfaces/paciente";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // Importando Skeleton
import { useNavigate, useParams } from "react-router-dom";
import { useUserSelector } from "@/store/hooks";

const ListagemServico = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_URL as string;
  const { id, idClinica } = useParams();
  console.log(id, idClinica)
  const user = useUserSelector((state) => state.user);

  const fetchClinicasList = async (): Promise<ITemp[]> => {
    const response = await axios.get(`${baseUrl}/clinics/${id}/services`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["ServicoList"],
    queryFn: fetchClinicasList,
  });

  if (error) return <div>Error fetching clinics</div>;

  return (
    <section className="flex-wrap gap-2 flex-col">
      <h1>Listagem dos serviços</h1>
      <div className="flex flex-wrap gap-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </CardFooter>
              </Card>
            ))
          : data?.map((pet) => (
              <Card key={pet.id}>
                <CardHeader>
                  <CardTitle>{pet.title}</CardTitle>
                  <CardDescription>{pet.title}</CardDescription>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    onClick={() =>
                      navigate(
                        `/internalClinica/detailsServico/${pet.id}/${id}`
                      )
                    }
                  >
                    Visualizar
                  </Button>

                  <Button>Apagar</Button>
                </CardFooter>
              </Card>
            ))}
      </div>
    </section>
  );
};

export default ListagemServico;
