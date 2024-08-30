import { Alert } from "antd"

export const Informer = () => {
  return  <Alert
  description={<div>Данные администрируются в <b>Рязань Путеводитель</b></div>}
  type="info"
  showIcon
/>
}