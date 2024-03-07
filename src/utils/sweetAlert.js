import Swal from 'sweetalert2';

export const sweetAlert = (icon, title, footer) => {
  Swal.fire({
    position: 'center',
    icon,
    title,
    footer,
    showConfirmButton: false,
    timer: 1500,
  });
};
