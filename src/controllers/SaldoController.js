import SaldoRepository from '../repositories/SaldoRepository.js';

class SaldoController {
  async show(req, res) {
    const { id } = req.params;

    return res.json(await SaldoRepository.getSaldo(id));
  }
}

export default new SaldoController();
