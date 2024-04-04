export default function convertToRupiah(angka: number) {
  if (typeof angka != 'undefined') {
    const number_string = new String(Math.round(angka)).replace(/[^,\d]/g, '').toString();
    const split = number_string.split(',') || [];
    if (typeof split[0] != 'undefined') {
      const sisa = split[0].length % 3;
      let rupiah = split[0].substring(0, sisa);
      const ribuan = split[0].substring(sisa).match(/\d{3}/gi);

      // console.log(angka);

      // tambahkan koma jika yang di input sudah menjadi angka ribuan
      if (ribuan) {
        const separator = sisa ? ',' : '';
        rupiah += separator + ribuan.join(',');
      }

      rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
      return (rupiah ? 'Rp. ' + rupiah : '') + ',-';
    }
  }
  return 'Rp. ' + angka;
}
