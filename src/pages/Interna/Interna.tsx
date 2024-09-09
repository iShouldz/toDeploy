import { Outlet, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useUserSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/user-slice";
import { Button } from "@/components/ui/button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "@/Services/GetServices";

const Interna = () => {
  const navigate = useNavigate();
  const user = useUserSelector((state) => state.user);
  const [openPacientes, setOpenPacientes] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openFuncionarios, setOpenFuncionarios] = useState(false);
  const [openAgendamento, setOpenAgendamento] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const { idClinica } = useParams();

  console.log(user);
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/home");
  };

  const {
    data: userData,
    isPending,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchUserData(user.token),
  });
  if (isPending) return <div>Carregando</div>;
  console.log();

  return (
    <div className="flex h-screen">
      <Dialog
        open={openPacientes}
        onOpenChange={() => setOpenPacientes((prevState) => !prevState)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Meus pacientes</DialogTitle>
            <DialogDescription className="flex gap-2 justify-center p-4">
              <NavLink
                to={`listagemPaciente`}
                onClick={() => setOpenPacientes((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center rounded-2xl p-4 gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <PersonIcon sx={{ fontSize: "100px" }} />
                <span>Listar Pacientes</span>
              </NavLink>
              <NavLink
                to={`cadastrarPaciente`}
                onClick={() => setOpenPacientes((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center rounded-2xl p-4  gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <PersonAddIcon sx={{ fontSize: "100px" }} />
                <span>Cadastrar Pacientes</span>
              </NavLink>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openServices}
        onOpenChange={() => setOpenServices((prevState) => !prevState)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Meus serviços</DialogTitle>
            <DialogDescription className="flex gap-2 justify-center p-4">
              <NavLink
                to={`listagemServico`}
                onClick={() => setOpenServices((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center rounded-2xl p-4 gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <HomeRepairServiceIcon sx={{ fontSize: "100px" }} />
                <span>Listar Serviços</span>
              </NavLink>
              <NavLink
                to={`cadastrarServico`}
                onClick={() => setOpenServices((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center rounded-2xl gap-3 p-4 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <DesignServicesIcon sx={{ fontSize: "100px" }} />
                <span>Cadastrar Serviço</span>
              </NavLink>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openFuncionarios}
        onOpenChange={() => setOpenFuncionarios((prevState) => !prevState)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Meus funcionarios</DialogTitle>
            <DialogDescription className="flex gap-2 justify-center p-4">
              <NavLink
                to={`listagemFuncionario`}
                onClick={() => setOpenFuncionarios((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center p-4 rounded-2xl gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <PersonIcon sx={{ fontSize: "100px" }} />
                <span>Listagem funcionário</span>
              </NavLink>
              <NavLink
                to={`cadastrarFuncionario`}
                onClick={() => setOpenFuncionarios((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center p-4 rounded-2xl gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <PersonAddIcon sx={{ fontSize: "100px" }} />
                <span>Cadastrar funcionário</span>
              </NavLink>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openAgendamento}
        onOpenChange={() => setOpenAgendamento((prevState) => !prevState)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Meus agendamentos</DialogTitle>
            <DialogDescription className="flex gap-2 justify-center p-4">
              <NavLink
                to={`listagemAgendamento`}
                onClick={() => setOpenAgendamento((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center p-4 rounded-2xl gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <PersonIcon sx={{ fontSize: "100px" }} />
                <span>Listagem agendamentos</span>
              </NavLink>
              <NavLink
                to={`agendamento`}
                onClick={() => setOpenAgendamento((prevState) => !prevState)}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center rounded-2xl p-4 gap-3 w-48 h-48 text-lg font-bold transition-all shadow-lg ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
                  }`
                }
              >
                <DesignServicesIcon sx={{ fontSize: "100px" }} />
                <span>Novo Agendamento</span>
              </NavLink>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <aside className="flex-shrink-0 w-fit border-r-2 bg-background">
        <div className="flex flex-col items-start gap-4 px-4 py-5">
          <div
            className={`absolute ${
              openMenu ? "left-[221px]" : "left-[69px]"
            } bg-slate-600 rounded-2xl flex items-center`}
          >
            {openMenu ? (
              <KeyboardArrowLeftIcon
                sx={{ color: "white" }}
                className="cursor-pointer"
                onClick={() => setOpenMenu((prevState) => !prevState)}
              />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ color: "white" }}
                className="cursor-pointer"
                onClick={() => setOpenMenu((prevState) => !prevState)}
              />
            )}
          </div>
          <NavLink
            to="/dashboard/listagemClinica"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`
            }
          >
            <HomeWorkIcon />
            {openMenu && <span>Minhas clinicas</span>}
          </NavLink>

          <NavLink
            to={`/internalClinica/${idClinica}/dashboard`}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted/50"
              }`
            }
          >
            <DashboardIcon className="h-5 w-5" />
            {openMenu && <span>Dashboard</span>}
          </NavLink>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:bg-muted/50"
                  variant={"ghost"}
                  onClick={() => setOpenPacientes((prevState) => !prevState)}
                >
                  <PersonIcon />
                  {openMenu && <span>Meus pacientes</span>}
                </Button>
              </TooltipTrigger>
              {!openMenu && (
                <TooltipContent side="right">
                  <p>Meus pacientes</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:bg-muted/50"
                  variant={"ghost"}
                  onClick={() => setOpenServices((prevState) => !prevState)}
                >
                  <HomeRepairServiceIcon />
                  {openMenu && <span>Meus Serviços</span>}
                </Button>
              </TooltipTrigger>
              {!openMenu && (
                <TooltipContent side="right">
                  <p>Meus serviços</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:bg-muted/50"
                  variant={"ghost"}
                  onClick={() => setOpenFuncionarios((prevState) => !prevState)}
                >
                  <Diversity3Icon />
                  {openMenu && <span> Meus funcionarios</span>}
                </Button>
              </TooltipTrigger>
              {!openMenu && (
                <TooltipContent side="right">
                  <p>Meus funcionarios</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:bg-muted/50"
                  variant={"ghost"}
                  onClick={() => setOpenAgendamento((prevState) => !prevState)}
                >
                  <MedicalServicesIcon />
                  {openMenu && <span> Meus agendamentos</span>}
                </Button>
              </TooltipTrigger>
              {!openMenu && (
                <TooltipContent side="right">
                  <p>Meus agendamentos</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>

        <Separator />
        <div className="mt-auto flex flex-col items-start gap-2 px-4 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted/50"
                >
                  <LogoutIcon />
                  {openMenu && <span>Logout</span>}
                </Button>
              </TooltipTrigger>
              {!openMenu && (
                <TooltipContent side="right">
                  <p>Logout</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="bottom-0 absolute p-4 ">
          <div className="flex items-center gap-2 justify-center">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="text-white bg-[#4EBA9D]">
                {userData?.name.charAt(0)}
              </AvatarFallback>
            </Avatar>{" "}
            {openMenu && <p className="text-sm">Olá, {userData?.name}</p>}
          </div>
        </div>
      </aside>

      <main className="flex-1 flex m-10 box-border w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Interna;
