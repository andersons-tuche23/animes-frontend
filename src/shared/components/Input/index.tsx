import { Search } from "lucide-react";
import { useSearch } from "@/shared/hooks";
import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ className }: InputProps) => {
  const { handleSubmit, handleInputChange, inputText } = useSearch();

  return (
    <S.Wrapper onSubmit={handleSubmit} className={className}>
      <S.Field
        value={inputText}
        onChange={handleInputChange}
        placeholder="Pesquisar"
      />
      <button type="submit">
        <Search size={14} />
      </button>
    </S.Wrapper>
  );
};
