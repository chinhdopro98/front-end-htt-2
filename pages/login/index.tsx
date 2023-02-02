import { useAppDispatch } from "@/hook/hook";
import { loginAction } from "@/redux/auth-slice";
import { IPayload } from "@/type/auth.interface";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
const HomeLogin = styled.div`
  width: 100%;
  height: 100vh;
`;

const BoxForm = styled.div`
  padding: 20px 20px;
  position: fixed;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
`;
const Login = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPayload>({});
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = (data: IPayload) => {
    dispatch(
      loginAction({
        username: data.username,
        password: data.password,
      })
    );
    router.push("/view-salary");
  };

  return (
    <HomeLogin className="home-form">
      <BoxForm>
        <h2>Login Member</h2>
        <form action="" autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
          <Controller
            name="username"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  label="Name"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "25px" }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  required
                />
              );
            }}
            control={control}
            defaultValue=""
          />
          <Controller
            name="password"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  variant="standard"
                  style={{ width: "100%", marginBottom: "25px" }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  required
                />
              );
            }}
            control={control}
            defaultValue=""
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#f24b50",
              textTransform: "capitalize",
              margin: "0 5px",
            }}
          >
            Login
          </Button>
        </form>
      </BoxForm>
    </HomeLogin>
  );
};

export default Login;
