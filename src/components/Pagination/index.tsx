import React from 'react';

import { Container, Text, Button } from './styles';

import { ArrowLeft, ArrowRight } from '../../styles/Icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  next: () => void;
  previous: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  next,
  previous
}) => {
  return (
    <Container>
      <Button
        onClick={previous}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ArrowLeft />
      </Button>

      <Text>
        Página {currentPage} de {totalPages}
      </Text>

      <Button
        onClick={next}
        disabled={currentPage === totalPages}
        aria-label="Próxima Página"
      >
        <ArrowRight />
      </Button>
    </Container>
  );
};
