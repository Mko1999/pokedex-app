import React from "react";
import styles from "./Pagination.module.scss";
import { Button } from "../../../components/shared";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const Pagination: React.FC = () => {
  const handlePreviousPage = () => {
    console.log("Go to previous page");
  };

  const paginationList = <li>1</li>;

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__container}>
        <ul>
          <motion.li
            whileFocus={{ opacity: "0.7" }}
            whileTap={{
              boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
              background:
                "linear-gradient(160deg, #0093E9 0%, #80D0C7 33%, #ffffff 66%, #ffffff 100%)",
            }}
            transition={{ duration: 2 }}
            onClick={handlePreviousPage}
            className={styles.pagination__button__back}
          >
            <Button className={styles.pagination__button__element}>
              <CaretLeftFill size="34" color="#fff" />
            </Button>
          </motion.li>
          {paginationList}
          <motion.li>
            <Button className={styles.pagination__button__element}>
              <CaretRightFill size="34" color="#fff" />
            </Button>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
