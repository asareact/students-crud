/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { useLogin } from "hooks/use-login";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const Login = () => {
  const {
    states: { userEmail, userPassword, errors },
    actions: { setUserEmail, setUserPassword, handleLogin },
  } = useLogin();

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                    invalid={!!errors.emailError}
                  />
                  <FormFeedback className="ml-2">
                    {errors.emailError}
                  </FormFeedback>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    invalid={!!errors.passwordError}
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                  />
                  <FormFeedback className="ml-2">
                    {errors.passwordError}
                  </FormFeedback>
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
              </div>
              <div className="text-center">
                <Button
                  className="my-4"
                  color="primary"
                  type="button"
                  onClick={handleLogin}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
