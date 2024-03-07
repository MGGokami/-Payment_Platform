import { OperationInterface } from "..";

const operations: OperationInterface[] = [
  {
    "amount": "0.01",
    "transaction_uuid": "f66df97e55cc4f40b40b22a7028440d8",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-03-14T10:01:19.000-04:00",
    "transaction_signature": "PxxbFQvRwjNU",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "gestrada88",
    "name": "Grisel",
    "lastname": "Estrada Enamorado",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "d2ce70bff4904c2796d6a1b926990889",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-03-14T10:01:19.000-04:00",
    "transaction_signature": "PxxbFQvRwjNU",
    "transaction_denom": "Devolución Total",
    "username": "gestrada88",
    "name": "Lilianne",
    "lastname": "Guerra Cueria",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "1321856924f648648024504cf7ec60f5",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-23T16:09:34.000-04:00",
    "transaction_signature": "436hys07bFqj",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "jdenis93090",
    "name": "José Luis",
    "lastname": "Galvez Denis",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "1e591eeac8d84527a557063c058736a2",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-30T15:58:46.000-04:00",
    "transaction_signature": "aHQ8iwc84J6Z",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "erubio85278",
    "name": "Ernesto Alejandro",
    "lastname": "Rubio Portela",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "feba0abafaf244c68180b1320b76d7c0",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-31T10:50:05.000-04:00",
    "transaction_signature": "fqpX6vhnYISF",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "czequeira884",
    "name": "Carlos Alberto",
    "lastname": "Zequeira Sánchez",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "e8d434c5a4fd48f5941cc9bef59b6e8f",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-31T10:51:09.000-04:00",
    "transaction_signature": "5dwcKe2XJTPB",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "czequeira884",
    "name": "Carlos Alberto",
    "lastname": "Zequeira Sánchez",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "2f574206a0bc4b298325fec9f8d1d350",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-31T11:20:28.000-04:00",
    "transaction_signature": "owmL9GsNpVmD",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "czequeira884",
    "name": "Carlos Alberto",
    "lastname": "Zequeira Sánchez",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "2d6d907e14da463a9e360b301f7cecfc",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-31T11:20:53.000-04:00",
    "transaction_signature": "3fo0rJRO1XM0",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "czequeira884",
    "name": "Carlos Alberto",
    "lastname": "Zequeira Sánchez",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "cd6dde9518634c20b0409fcca6c3179b",
    "status_denom": "Aceptada",
    "transaction_updated_at": "2023-08-31T11:21:15.000-04:00",
    "transaction_signature": "DEGzrZEfvn8t",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "czequeira884",
    "name": "Carlos Alberto",
    "lastname": "Zequeira Sánchez",
  },
  {
    "amount": "0.01",
    "transaction_uuid": "20131e1fbb5a4faf82764637d637e400",
    "status_denom": "Fallida",
    "transaction_updated_at": "2023-08-31T11:21:38.000-04:00",
    "transaction_signature": "X21uOEbMhoLZ",
    "transaction_denom": "Pago a Comercio por QR",
    "username": "czequeira884",
    "name": "Carlos Alberto",
    "lastname": "Zequeira Sánchez",
  }
]

export function getOperations() {
  return new Promise<OperationInterface[]>(resolve => {
    setTimeout(() => {
      resolve(operations)
    }, 100);
  })
}